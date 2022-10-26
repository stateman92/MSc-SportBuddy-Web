import {Injectable} from "@angular/core";
import {LocalStorageWrapper} from "./components/local.storage.wrapper";
import {StorageKeys} from "./components/storage.keys";
import {filter, Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class StorageService {
  private readonly storageSubject = new Subject<[string, any]>();

  constructor(
    private readonly localStorageWrapper: LocalStorageWrapper
  ) {
  }

  set<T>(key: StorageKeys, value: T) {
    this.localStorageWrapper.setItem(key, JSON.stringify(value));
    this.storageSubject.next([key, value]);
  }

  subscribe<T>(key: StorageKeys): Observable<T> {
    return this.storageSubject
      .pipe(filter(item => item[0] === key || item[0] === null))
      .pipe(map(item => item[1] as T));
  }

  get<T>(key: StorageKeys): T {
    return JSON.parse(this.localStorageWrapper.getItem(key)) as T;
  }

  remove(key: StorageKeys) {
    this.localStorageWrapper.removeItem(key);
    this.storageSubject.next([key, null]);
  }

  clear() {
    this.localStorageWrapper.clear();
    this.storageSubject.next([null, null]);
  }
}
