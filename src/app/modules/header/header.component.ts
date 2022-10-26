import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {StorageService} from "../../services/storage/storage.service";
import {StorageKeys} from "../../services/storage/components/storage.keys";
import {BaseComponent} from "../base/base.component";
import {RouterService} from "../../services/routing/router.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  visible = false;

  constructor(
    private readonly authenticationService: AuthenticationService,
    storageService: StorageService,
    routerService: RouterService
  ) {
    super(storageService, routerService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.storageService.subscribe<string>(StorageKeys.token)
      .subscribe(token => {
        this.visible = token !== null && token !== undefined;
      })
  }

  logout() {
    this.authenticationService.logout();
  }
}
