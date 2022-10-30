import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {AlertService} from '../../services/alert/alert.service';
import {RoutePaths} from '../../services/routing/components/route.paths';
import {RouterService} from '../../services/routing/router.service';
import {Validity} from './components/validity';
import {StorageService} from '../../services/storage/storage.service';
import {StorageKeys} from '../../services/storage/components/storage.keys';
import {BaseComponent} from '../base/base.component';
import {TranslationService} from "../../services/translation/translation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
  loading = false;
  email = "";
  password = "";
  private emailValid: Validity = null;
  private passwordValid: Validity = null;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly alertService: AlertService,
    private readonly translationService: TranslationService,
    storageService: StorageService,
    routerService: RouterService
  ) {
    super(storageService, routerService);
  }

  get emailValidity() {
    switch (this.emailValid) {
      case Validity.invalid:
        return 'is-invalid';
      case Validity.valid:
        return 'is-valid';
      default:
        return null
    }
  }

  get passwordValidity() {
    switch (this.passwordValid) {
      case Validity.invalid:
        return 'is-invalid';
      case Validity.valid:
        return 'is-valid';
      default:
        return null
    }
  }

  override ngOnInit() {
    // super.ngOnInit(); explicitly bypass token handling
    if (this.routerService.currentRoute !== RoutePaths.login) {
      this.routerService.navigate(RoutePaths.login);
    }
    const token = this.storageService.get(StorageKeys.token);
    if (token !== null && token !== undefined) {
      this.routerService.navigate(RoutePaths.upload)
    }
  }

  onSubmit() {
    this.loading = true;
    this.authenticationService.login(this.email, this.password)
      .subscribe(
        _ => {
          this.alertService.success(this.translationService.translate("login.result.success"));
          this.routerService.navigate(RoutePaths.upload)
          this.loading = false;
        },
        _ => {
          this.alertService.error(this.translationService.translate("login.result.error"));
          this.loading = false;
        });
  }

  onEmailChange() {
    if (this.email == null || this.email === "" || !this.authenticationService.isEmailRightFormatted(this.email)) {
      this.emailValid = Validity.invalid
    } else {
      this.emailValid = Validity.valid
    }
  }

  onPasswordChange() {
    if (this.password == null || this.password === "") {
      this.passwordValid = Validity.invalid
    } else {
      this.passwordValid = Validity.valid
    }
  }
}
