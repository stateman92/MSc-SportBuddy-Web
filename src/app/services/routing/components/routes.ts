import {Routes} from '@angular/router';
import {LoginComponent} from '../../../modules/login/login.component';
import {UploadComponent} from '../../../modules/upload/upload.component';
import {CommandsComponent} from '../../../modules/commands/commands.component';
import {RoutePaths} from './route.paths';
import {UsersComponent} from '../../../modules/users/users.component';
import {ResetPasswordComponent} from '../../../modules/reset-password/reset-password.component';
import {ExercisesComponent} from '../../../modules/exercises/exercises.component';

export const routes: Routes = [
  {path: RoutePaths.login, component: LoginComponent},
  {path: RoutePaths.uploadWithParam, component: UploadComponent},
  {path: RoutePaths.upload, component: UploadComponent},
  {path: RoutePaths.commands, component: CommandsComponent},
  {path: RoutePaths.users, component: UsersComponent},
  {path: RoutePaths.exercises, component: ExercisesComponent},
  {path: RoutePaths.resetPassword, component: ResetPasswordComponent},
  {path: RoutePaths.default, redirectTo: RoutePaths.login}
];
