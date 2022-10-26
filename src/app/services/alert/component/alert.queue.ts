import {Injectable} from "@angular/core";
import {Alert} from "./alert";
import {TimingService} from "../../timing/timing.service";
import {Timer} from "../../timing/timer";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class AlertQueue {
  readonly visibilitySubject = new Subject<boolean>();
  readonly alertSubject = new Subject<Alert>();
  private timer: Timer;
  private readonly delay = 2500;

  constructor(private readonly timingService: TimingService) {
  }

  didReceive(alert: Alert) {
    this.timingService.clearTimeout(this.timer);
    this.timer = this.timingService.setTimeout(() => {
      this.visibilitySubject.next(false);
    }, this.delay);
    this.visibilitySubject.next(true);
    this.alertSubject.next(alert);
  }
}
