import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {RoutePaths} from "./components/route.paths";
import {StorageService} from "../storage/storage.service";
import {StorageKeys} from "../storage/components/storage.keys";
import {AlertService} from "../alert/alert.service";

@Injectable({providedIn: 'root'})
export class RouterService {
  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
    private readonly alertService: AlertService
  ) {
    this.setup();
  }

  navigate(path: RoutePaths) {
    this.router.navigate([path]).then(() => {
    });
  }

  logout() {
    this.storageService.clear();
    this.navigate(RoutePaths.default);
    this.alertService.logout();
  }

  private setup() {
    this.storageService.subscribe<string>(StorageKeys.token)
      .subscribe(token => {
        if (token === null || token === undefined) {
          this.logout();
        }
      })
  }
}
