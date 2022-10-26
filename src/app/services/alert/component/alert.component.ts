import {Component, OnInit} from '@angular/core';
import {AlertService} from "../alert.service";
import {AlertQueue} from "./alert.queue";
import {Alert} from "./alert";

@Component({
  selector: 'app-alert-component',
  templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit {
  visible: boolean;
  alert: Alert;

  constructor(private readonly alertService: AlertService, private readonly alertQueue: AlertQueue) {
  }

  ngOnInit() {
    this.setupBindings();
  }

  private setupBindings() {
    this.alertService.getAlert()
      .subscribe(message => {
        this.alertQueue.didReceive(message);
      });
    this.alertQueue.visibilitySubject
      .subscribe(visible => {
        this.visible = visible
      })
    this.alertQueue.alertSubject
      .subscribe(alert => {
        this.alert = alert
      })
  }
}
