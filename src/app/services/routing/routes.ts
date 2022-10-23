import {Routes} from "@angular/router";
import {LoginComponent} from "../../login/login.component";
import {UploadComponent} from "../../upload/upload.component";
import {CommandsComponent} from "../../commands/commands.component";
import {RoutePaths} from "./route.paths";

export const routes: Routes = [
  {path: RoutePaths.default, component: LoginComponent},
  {path: RoutePaths.upload, component: UploadComponent},
  {path: RoutePaths.commands, component: CommandsComponent}
];
