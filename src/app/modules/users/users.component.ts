import {Component, OnInit} from '@angular/core';
import {UserDB} from "../../OpenAPI";
import {ApiService} from "../../services/api/api.service";
import {TimingService} from "../../services/timing/timing.service";
import {ExportService} from "../../services/export/export.service";
import {UsersCacheService} from "../../services/cache/components/users.cache";
import {BaseComponent} from "../base/base.component";
import {StorageService} from "../../services/storage/storage.service";
import {RouterService} from "../../services/routing/router.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends BaseComponent implements OnInit {
  users = Array<UserDB>();
  loading = false;

  constructor(
    private readonly apiService: ApiService,
    private readonly timingService: TimingService,
    private readonly exportService: ExportService,
    private readonly usersCacheService: UsersCacheService,
    storageService: StorageService,
    routerService: RouterService
  ) {
    super(storageService, routerService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.loading = true;
    let currentUsers = this.usersCacheService.get()
    if (currentUsers !== null && currentUsers !== undefined && currentUsers.length > 0) {
      this.users = currentUsers;
      this.loading = false;
    } else {
      this.apiService.getUsers()
        .subscribe(users => {
          this.loading = false;
          this.users = users;
          this.usersCacheService.set(users);
        })
    }
  }

  export() {
    this.loading = true;
    this.timingService.setTimeout(() => {
      this.exportService.export(document.getElementById('table'), 'users');
      this.loading = false;
    }, 750);
  }

  refresh() {
    this.users = [];
    this.usersCacheService.set([]);
    this.ngOnInit();
  }
}
