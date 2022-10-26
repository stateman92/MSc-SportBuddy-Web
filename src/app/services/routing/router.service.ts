import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {RoutePaths} from "./components/route.paths";
import {StorageService} from "../storage/storage.service";
import {StorageKeys} from "../storage/components/storage.keys";

@Injectable({providedIn: 'root'})
export class RouterService {
  constructor(private readonly router: Router, private readonly storageService: StorageService) {
    this.setup();
  }

  navigate(path: RoutePaths) {
    this.router.navigate([path]).then(() => {
    });
  }

  private setup() {
    this.storageService.subscribe<string>(StorageKeys.token)
      .subscribe(token => {
        if (token === null || token === undefined) {
          this.navigate(RoutePaths.default);
        }
      })
  }
}
