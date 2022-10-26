import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './services/routing/components/app.routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './modules/header/header.component';
import {UploadComponent} from './modules/upload/upload.component';
import {CommandsComponent} from './modules/commands/commands.component';

import {ApiModule, Configuration, ConfigurationParameters} from './OpenAPI';
import {AppConfigService} from './services/appConfig/app.config.service';
import {HttpClientModule} from "@angular/common/http";
import {Environment} from "./services/appConfig/components/environment";
import {LoginComponent} from './modules/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AlertComponent} from './services/alert/component/alert.component';
import {UsersComponent} from './modules/users/users.component';
import {StorageService} from "./services/storage/storage.service";
import {ResetPasswordComponent} from './modules/reset-password/reset-password.component';

export const environment = Environment.prod;
const appConfig = new AppConfigService(environment);

function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: appConfig.serverUrl,
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadComponent,
    CommandsComponent,
    LoginComponent,
    AlertComponent,
    UsersComponent,
    ResetPasswordComponent
  ],
  imports: [
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
