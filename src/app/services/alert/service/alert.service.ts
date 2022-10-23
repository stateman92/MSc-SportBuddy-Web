import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Alert} from "./alert";
import {AlertType} from "./alert.type";

@Injectable({providedIn: 'root'})
export class AlertService {
  private subject = new Subject<Alert>();

  constructor() {
  }

  getAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  success(message: string) {
    this.subject.next(new Alert(AlertType.success, message));
  }

  error(message: string) {
    this.subject.next(new Alert(AlertType.error, message));
  }

  clear() {
    this.subject.next(null);
  }
}
