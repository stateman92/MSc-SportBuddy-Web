import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {RoutePaths} from "./route.paths";

@Injectable({providedIn: 'root'})
export class RouterService {
  constructor(readonly router: Router) {
  }

  navigate(path: RoutePaths) {
    this.router.navigate([path]).then(() => {
    });
  }
}
