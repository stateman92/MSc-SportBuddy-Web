import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {StorageService} from "../storage/storage.service";
import {StorageKeys} from "../storage/components/storage.keys";
import {ApiService} from "../api/api.service";
import {UserDTO} from "../../OpenAPI";
import {RouterService} from "../routing/router.service";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  currentUser: Observable<UserDTO>;
  private currentUserSubject: BehaviorSubject<UserDTO>;

  constructor(
    private readonly apiService: ApiService,
    private readonly storageService: StorageService,
    private readonly routerService: RouterService
  ) {
    this.currentUserSubject = new BehaviorSubject<UserDTO>(storageService.get(StorageKeys.user));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email, password) {
    return this.apiService.login(email, password)
      .pipe(
        map(user => {
          this.storageService.set(StorageKeys.user, user.user);
          this.storageService.set(StorageKeys.token, user.token);
          this.currentUserSubject.next(user.user);
          return user.user })
      );
  }

  isEmailRightFormatted(email: string) {
    const atParts = email.split('@');
    const dotParts = email.split('.');
    if (atParts.length !== 2 || dotParts.length < 2) {
      return false;
    }
    return email.includes('@') &&
      email.indexOf('@') === email.lastIndexOf('@') &&
      atParts[0] !== '' &&
      atParts[1] !== '' &&
      dotParts[dotParts.length - 1] !== '' &&
      dotParts[dotParts.length - 2] !== '';
  }

  logout() {
    this.routerService.logout(false);
    this.currentUserSubject.next(null);
    this.apiService.logout();
  }
}
