import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UploadComponent} from './upload/upload.component';
import {CommandsComponent} from './commands/commands.component';

import {ApiModule, Configuration, ConfigurationParameters} from './OpenAPI';
import {AppConfigComponent} from './appconfig/app-config-component.service';
import {HttpClientModule} from "@angular/common/http";
import {Environment} from "./appconfig/environment";
import { LoginComponent } from './login/login.component';

const environment = Environment.dev
const appConfig = new AppConfigComponent(environment)

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
    LoginComponent
  ],
  imports: [
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor() {
    console.log(appConfig.serverUrl);
  }
}
