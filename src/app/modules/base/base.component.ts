import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage/storage.service';
import {RouterService} from '../../services/routing/router.service';
import {StorageKeys} from '../../services/storage/components/storage.keys';

@Component({
  selector: 'app-base', // not used
  template: '',
  styles: []
})
export abstract class BaseComponent implements OnInit {
  protected constructor(
    protected readonly storageService: StorageService,
    protected readonly routerService: RouterService) {
  }

  ngOnInit() {
    const token = this.storageService.get(StorageKeys.token);
    if (token === null || token === undefined) {
      this.routerService.logout(true);
    }
  }
}
