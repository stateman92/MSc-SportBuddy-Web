import {Component, OnInit} from '@angular/core';
import {UserDB} from "../../OpenAPI";
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";
import {TimingService} from "../../services/timing/timing.service";
import {ExportService} from "../../services/export/export.service";
import {UsersCacheService} from "../../services/cache/components/users.cache";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = Array<UserDB>();
  loading = false;

  constructor(private readonly apiService: ApiService,
              private readonly timingService: TimingService,
              private readonly exportService: ExportService,
              private readonly usersCacheService: UsersCacheService) {
  }

  ngOnInit() {
    this.setup();
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
    this.setup();
  }

  private setup() {
    this.loading = true;
    let currentUsers = this.usersCacheService.get()
    if (currentUsers !== null && currentUsers !== undefined && currentUsers.length > 0) {
      this.users = currentUsers;
    } else {
      this.apiService.getUsers()
        .pipe(first())
        .subscribe(users => {
          this.loading = false;
          this.users = users;
          this.usersCacheService.set(users);
        })
    }
  }
}
