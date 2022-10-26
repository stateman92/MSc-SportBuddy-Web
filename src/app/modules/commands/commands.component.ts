import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {ConfirmationService} from "../../services/confirmation/confirmation.service";
import {BaseComponent} from "../base/base.component";
import {StorageService} from "../../services/storage/storage.service";
import {RouterService} from "../../services/routing/router.service";

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent extends BaseComponent implements OnInit {
  constructor(
    private readonly apiService: ApiService,
    private readonly confirmationService: ConfirmationService,
    storageService: StorageService,
    routerService: RouterService
  ) {
    super(storageService, routerService);
  }

  clearDatabase() {
    if (this.confirmationService.confirm("Are you sure you want to clear the database?")) {
      this.apiService.clearDatabase();
    }
  }

  resetDatabase() {
    if (this.confirmationService.confirm("Are you sure you want to reset the database?")) {
      this.apiService.resetDatabase();
    }
  }
}
