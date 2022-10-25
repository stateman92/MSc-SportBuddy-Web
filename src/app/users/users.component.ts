import {Component} from '@angular/core';
import {UserDB} from "../OpenAPI";
import {ApiService} from "../services/api/api.service";
import {first} from "rxjs";
import {TimingService} from "../services/timing/timing.service";
import {ExportService} from "../services/export/export.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = Array<UserDB>()
  loading = false;

  constructor(private readonly apiService: ApiService,
              private readonly timingService: TimingService,
              private readonly exportService: ExportService) {
    this.downloadUsers()
  }

  export() {
    this.loading = true;
    this.timingService.setTimeout(() => {
      this.exportService.export(document.getElementById('table'), 'users');
      this.loading = false;
    }, 750);
  }

  private downloadUsers() {
    this.apiService.getUsers()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      })
  }
}
