import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {first} from "rxjs";
import {AlertService} from "../../services/alert/alert.service";
import {RoutePaths} from "../../services/routing/components/route.paths";
import {RouterService} from "../../services/routing/router.service";
import {Validity} from "./components/validity";
import {StorageService} from "../../services/storage/storage.service";
import {StorageKeys} from "../../services/storage/components/storage.keys";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  email = "";
  password = "";
  private emailValid: Validity = null;
  private passwordValid: Validity = null;

  constructor(
    private readonly routerService: RouterService,
    private readonly authenticationService: AuthenticationService,
    private readonly alertService: AlertService,
    private readonly storageService: StorageService
  ) {
  }

  ngOnInit() {
    const token = this.storageService.get(StorageKeys.token);
    if (token !== null && token !== undefined) {
      this.routerService.navigate(RoutePaths.upload)
    }
  }

  onSubmit() {
    this.loading = true;
    this.authenticationService.login(this.email, this.password)
      .pipe(first())
      .subscribe(
        _ => {
          this.alertService.success("Success Success Success Success Success Success Success Success Success ");
          this.routerService.navigate(RoutePaths.upload)
          this.loading = false;
        },
        _ => {
          this.alertService.error("Error Error Error Error Error Error Error Error ");
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
}
