import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from "./routes";
import {RoutePaths} from "./route.paths";

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export function navigate(routePaths: RoutePaths) {

}
