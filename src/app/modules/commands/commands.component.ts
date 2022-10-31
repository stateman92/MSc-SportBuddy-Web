import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {ConfirmationService} from '../../services/confirmation/confirmation.service';
import {BaseComponent} from '../base/base.component';
import {StorageService} from '../../services/storage/storage.service';
import {RouterService} from '../../services/routing/router.service';
import {TranslationService} from '../../services/translation/translation.service';
import {AlertService} from '../../services/alert/alert.service';
import {UuidService} from '../../services/uuid/uuid.service';
import {Validity} from '../login/components/validity';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent extends BaseComponent implements OnInit {
  deleteId = '';
  loading = false;
  loadingClear = false;
  loadingReset = false;
  loadingDelete = false;
  private deleteIdValid: Validity = null;

  constructor(
    private readonly apiService: ApiService,
    private readonly confirmationService: ConfirmationService,
    private readonly translationService: TranslationService,
    private readonly alertService: AlertService,
    private readonly uuidService: UuidService,
    storageService: StorageService,
    routerService: RouterService
  ) {
    super(storageService, routerService);
  }

  get deleteIdValidity() {
    switch (this.deleteIdValid) {
      case Validity.invalid:
        return 'is-invalid';
      case Validity.valid:
        return 'is-valid';
      default:
        return null
    }
  }

  clearDatabase() {
    if (this.confirmationService.confirm(this.translationService.translate('commands.clear.confirmation'))) {
      this.loading = true;
      this.loadingClear = true;
      this.apiService.clearDatabase()
        .subscribe(
          _ => {
            this.alertService.success(this.translationService.translate('commands.clear.success'));
            this.loading = false;
            this.loadingClear = false;
          },
          _ => {
            this.alertService.error(this.translationService.translate('commands.clear.error'));
            this.loading = false;
            this.loadingClear = false;
          });
    }
  }

  resetDatabase() {
    if (this.confirmationService.confirm(this.translationService.translate('commands.reset.confirmation'))) {
      this.loading = true;
      this.loadingReset = true;
      this.apiService.resetDatabase()
        .subscribe(
          _ => {
            this.alertService.success(this.translationService.translate('commands.reset.success'));
            this.loading = false;
            this.loadingReset = false;
          },
          _ => {
            this.alertService.error(this.translationService.translate('commands.reset.error'));
            this.loading = false;
            this.loadingReset = false;
          });
    }
  }

  deleteExercise() {
    this.loading = true;
    this.loadingDelete = true;
    this.apiService.deleteExercise(this.deleteId)
      .subscribe(
        _ => {
          this.alertService.success(this.translationService.translate('commands.delete.success'));
          this.loading = false;
          this.loadingDelete = false;
        },
        _ => {
          this.alertService.error(this.translationService.translate('commands.delete.error'));
          this.loading = false;
          this.loadingDelete = false;
        });
  }

  onDeleteIdChange() {
    if (this.deleteId == null || this.deleteId === '' || !this.uuidService.isValid(this.deleteId)) {
      this.deleteIdValid = Validity.invalid
    } else {
      this.deleteIdValid = Validity.valid
    }
  }
}
