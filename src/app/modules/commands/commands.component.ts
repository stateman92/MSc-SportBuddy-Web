import {Component} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {ConfirmationService} from "../../services/confirmation/confirmation.service";

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent {
  constructor(private readonly apiService: ApiService, private readonly confirmationService: ConfirmationService) {
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
