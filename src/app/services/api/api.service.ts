import {Injectable} from "@angular/core";
import {BackendService, ExerciseModelDTO} from "../../OpenAPI";
import {StorageService} from "../storage/storage.service";
import {StorageKeys} from "../storage/storage.keys";
import {first} from "rxjs";

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private readonly backendService: BackendService, private readonly storageServie: StorageService) {
    storageServie.subscribe<string>(StorageKeys.token)
      .subscribe(token => {
        this.backendService.configuration.credentials['Bearer'] = () => {
          return `Bearer ${token}`;
        };
      })
  }

  login(email: string, password: string) {
    return this.backendService.adminLoginPost(email, password);
  }

  logout() {
    return this.backendService.logoutPost().pipe(first()).subscribe();
  }

  clearDatabase() {
    return this.backendService.clearDatabasePost().pipe(first()).subscribe();
  }

  resetDatabase() {
    return this.backendService.resetDatabasePost().pipe(first()).subscribe();
  }

  deleteExercise(id: string) {
    return this.backendService.deleteExerciseModelPost(id).pipe(first()).subscribe();
  }

  uploadExercise(exercise: ExerciseModelDTO) {
    return this.backendService.uploadExerciseModelPost(exercise).pipe(first()).subscribe();
  }
}
