import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../base/base.component";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {StorageService} from "../../services/storage/storage.service";
import {RouterService} from "../../services/routing/router.service";
import {ApiService} from "../../services/api/api.service";
import {ActivatedRoute} from "@angular/router";
import {RoutePaths} from "../../services/routing/components/route.paths";
import {AlertService} from "../../services/alert/alert.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent extends BaseComponent implements OnInit {
  loading = false;
  password = '';
  confirmPassword = '';
  private readonly token: string;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly apiService: ApiService,
    private readonly alertService: AlertService,
    private readonly route: ActivatedRoute,
    storageService: StorageService,
    routerService: RouterService
  ) {
    super(storageService, routerService);
    this.token = this.route.snapshot.queryParams['token'];
  }

  override ngOnInit() {
    // super.ngOnInit(); explicitly bypass token handling
    if (this.token === null || this.token === undefined) {
      this.routerService.navigate(RoutePaths.login);
    }
  }

  onSubmit() {
    this.apiService.resetPassword(this.token, this.password)
      .subscribe(
        _ => {
          this.alertService.success("Success Success Success Success Success Success Success Success Success ");
          this.routerService.navigate(RoutePaths.login)
          this.loading = false;
        },
        _ => {
          this.alertService.error("Error Error Error Error Error Error Error Error ");
          this.loading = false;
        });
  }
}
