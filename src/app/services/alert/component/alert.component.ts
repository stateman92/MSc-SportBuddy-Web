import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from "../service/alert.service";

@Component({
  selector: 'app-alert-component',
  templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit, OnDestroy {
  visible: boolean;
  message: string;
  cssClass: string;
  private subscription: Subscription;
  private timeout: NodeJS.Timeout;

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, 2500)
        this.visible = true;
        this.cssClass = message.cssStyle;
        this.message = message.text;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
