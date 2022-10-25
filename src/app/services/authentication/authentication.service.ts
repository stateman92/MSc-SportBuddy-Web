import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {StorageService} from "../storage/storage.service";
import {StorageKeys} from "../storage/storage.keys";
import {ApiService} from "../api/api.service";
import {UserDTO} from "../../OpenAPI";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  public currentUser: Observable<UserDTO>;
  private currentUserSubject: BehaviorSubject<UserDTO>;

  constructor(private readonly apiService: ApiService, private readonly storageService: StorageService) {
    this.currentUserSubject = new BehaviorSubject<UserDTO>(storageService.get(StorageKeys.user));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserDTO {
    return this.currentUserSubject.value;
  }

  login(email, password) {
    return this.apiService.login(email, password)
      .pipe(map(user => {
        this.storageService.set(StorageKeys.user, user.user);
        this.storageService.set(StorageKeys.token, user.token);
        this.currentUserSubject.next(user.user);
        return user.user;
      }));
  }

  logout() {
    this.storageService.remove(StorageKeys.user);
    this.storageService.remove(StorageKeys.token);
    this.currentUserSubject.next(null);
    this.apiService.logout();
  }
}
