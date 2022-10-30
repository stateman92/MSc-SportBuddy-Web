import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {ConfirmationService} from '../../services/confirmation/confirmation.service';
import {BaseComponent} from '../base/base.component';
import {StorageService} from '../../services/storage/storage.service';
import {RouterService} from '../../services/routing/router.service';
import {TranslationService} from '../../services/translation/translation.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent extends BaseComponent implements OnInit {
  constructor(
    private readonly apiService: ApiService,
    private readonly confirmationService: ConfirmationService,
    private readonly translationService: TranslationService,
    storageService: StorageService,
    routerService: RouterService
  ) {
    super(storageService, routerService);
  }

  clearDatabase() {
    if (this.confirmationService.confirm(this.translationService.translate('commands.clear.confirmation'))) {
      this.apiService.clearDatabase();
    }
  }

  resetDatabase() {
    if (this.confirmationService.confirm(this.translationService.translate('commands.reset.confirmation'))) {
      this.apiService.resetDatabase();
    }
  }
}
