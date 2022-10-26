import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {RoutePaths} from "./components/route.paths";
import {StorageService} from "../storage/storage.service";
import {AlertService} from "../alert/alert.service";

@Injectable({providedIn: 'root'})
export class RouterService {
  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
    private readonly alertService: AlertService
  ) {
  }

  get currentRoute() {
    return RoutePaths[this.router.url.replace('/', '')];
  }

  navigate(path: RoutePaths) {
    this.router.navigate([path]).then(() => {
    });
  }

  logout(invalidCredentials: boolean) {
    this.navigate(RoutePaths.login);
    this.storageService.clear();
    if (invalidCredentials) {
      this.alertService.logout();
    }
  }
}
