import {BehaviorSubject, Observable} from "rxjs";

export class CacheService<T> {
  private value = new BehaviorSubject<T>(null);

  set(value: T) {
    this.value.next(value);
  }

  subscribe(): Observable<T> {
    return this.value.asObservable()
  }

  get(): T {
    return this.value.getValue();
  }

  remove() {
    this.value.next(null);
  }
}
