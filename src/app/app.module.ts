import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UploadComponent} from './upload/upload.component';
import {CommandsComponent} from './commands/commands.component';

import {ApiModule, Configuration, ConfigurationParameters} from './OpenAPI';
import {AppConfigComponentService} from './services/appConfig/app-config-component.service';
import {HttpClientModule} from "@angular/common/http";
import {Environment} from "./services/appConfig/environment";
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AlertComponent } from './services/alert/component/alert.component';

const environment = Environment.dev
const appConfig = new AppConfigComponentService(environment)

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
    AlertComponent
  ],
  imports: [
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
