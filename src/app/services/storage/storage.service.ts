import {Injectable} from "@angular/core";
import {LocalStorageWrapper} from "./local.storage.wrapper";
import {StorageKeys} from "./storage.keys";

@Injectable({providedIn: 'root'})
export class StorageService {
  constructor(private localStorageWrapper: LocalStorageWrapper) {
  }

  set<T>(key: StorageKeys, value: T) {
    this.localStorageWrapper.setItem(key, JSON.stringify(value));
  }

  get<T>(key: StorageKeys): T {
    return JSON.parse(this.localStorageWrapper.getItem(key)) as T;
  }

  remove(key: StorageKeys) {
    this.localStorageWrapper.removeItem(key);
  }

  clear() {
    this.localStorageWrapper.clear();
  }
}
