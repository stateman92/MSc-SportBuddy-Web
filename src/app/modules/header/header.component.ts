import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {StorageService} from "../../services/storage/storage.service";
import {StorageKeys} from "../../services/storage/components/storage.keys";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visible = false;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly storageService: StorageService
  ) {
  }

  ngOnInit() {
    this.setup();
  }

  logout() {
    this.authenticationService.logout()
  }

  private setup() {
    this.storageService.subscribe<string>(StorageKeys.token)
      .subscribe(token => {
        this.visible = token !== null && token !== undefined;
      })
  }
}
