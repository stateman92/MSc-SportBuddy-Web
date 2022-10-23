import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from "../services/authentication.service";
import {first} from "rxjs";
import {AlertService} from "../services/alert/service/alert.service";
import {RoutePaths} from "../services/routing/route.paths";
import {RouterService} from "../services/routing/router.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private routerService: RouterService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
  }

  get form() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (this.authenticationService.currentUserValue != null) {
      this.routerService.navigate(RoutePaths.upload)
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.form['email'].value, this.form['password'].value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success("Success Success Success Success Success Success Success Success Success ");
          this.routerService.navigate(RoutePaths.upload)
          this.loading = false;
        },
        error => {
          this.alertService.error("Error Error Error Error Error Error Error Error ");
          this.loading = false;
        });
  }
}
