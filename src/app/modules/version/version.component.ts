import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {StorageService} from '../../services/storage/storage.service';
import {RouterService} from '../../services/routing/router.service';
// @ts-ignore
import packageInfo from '../../../../package.json';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent extends BaseComponent implements OnInit {
  version: string = packageInfo.version;

  constructor(
    storageService: StorageService,
    routerService: RouterService
  ) {
    super(storageService, routerService);
  }

  override ngOnInit() {
    // super.ngOnInit(); explicitly bypass token handling
  }
}
