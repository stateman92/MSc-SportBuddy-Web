import {Injectable} from "@angular/core";
import {BackendService, ExerciseModelDTO} from "../../OpenAPI";
import {StorageKeys} from "../storage/components/storage.keys";
import {catchError, first, of} from "rxjs";
import {RouterService} from "../routing/router.service";
import {StorageService} from "../storage/storage.service";

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(
    private readonly backendService: BackendService,
    private readonly storageService: StorageService,
    private readonly routerService: RouterService
  ) {
    this.setup()
  }

  login(email: string, password: string) {
    return this.backendService.adminLoginPost(email, password).pipe(
      first()
    );
  }

  logout() {
    return this.backendService.logoutPost().pipe(
      first()
    ).subscribe();
  }

  clearDatabase() {
    return this.backendService.clearDatabasePost().pipe(
      first(),
      catchError((error, caught) => {
        this.handleError(error);
        return of(0);
      })
    ).subscribe();
  }

  getUsers() {
    return this.backendService.usersGet().pipe(
      first(),
      catchError((error, caught) => {
        this.handleError(error);
        return of([]);
      })
    );
  }

  resetDatabase() {
    return this.backendService.resetDatabasePost().pipe(
      first(),
      catchError((error, caught) => {
        this.handleError(error);
        return of(0);
      })
    ).subscribe();
  }

  deleteExercise(id: string) {
    return this.backendService.deleteExerciseModelPost(id).pipe(
      first(),
      catchError((error, caught) => {
        this.handleError(error);
        return of(0);
      })
    ).subscribe();
  }

  resetPassword(id: string, password: string) {
    return this.backendService.saveNewPasswordPost(id, password).pipe(
      first()
    );
  }

  uploadExercise(exercise: ExerciseModelDTO) {
    return this.backendService.uploadExerciseModelPost(exercise).pipe(
      first(),
      catchError((error, caught) => {
        this.handleError(error);
        return of(0);
      })
    ).subscribe();
  }

  private setup() {
    this.storageService.subscribe<string>(StorageKeys.token)
      .subscribe(token => {
        this.backendService.configuration.credentials['Bearer'] = () => {
          return `Bearer ${token}`;
        };
      })
  }

  private handleError(error: any) {
    if (error.status === 401) {
      this.routerService.logout(true);
    }
  }
}
