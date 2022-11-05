import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {ExerciseModelDTO} from '../../OpenAPI';
import {ApiService} from '../../services/api/api.service';
import {StorageService} from '../../services/storage/storage.service';
import {RouterService} from '../../services/routing/router.service';
import {ExercisesCacheService} from '../../services/cache/components/exercises.cache.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent extends BaseComponent implements OnInit {
  exercises = Array<ExerciseModelDTO>();
  loading = false;
  loadingRefresh = false;

  constructor(
    private readonly apiService: ApiService,
    private readonly exercisesCacheService: ExercisesCacheService,
    storageService: StorageService,
    routerService: RouterService
  ) {
    super(storageService, routerService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.loading = true;
    let currentExercises = this.exercisesCacheService.get()
    if (currentExercises !== null && currentExercises !== undefined && currentExercises.length > 0) {
      this.exercises = currentExercises;
      this.loading = false;
    } else {
      this.apiService.getExercises()
        .subscribe(exercises => {
          this.loading = false;
          this.loadingRefresh = false;
          this.exercises = exercises;
          this.exercisesCacheService.set(exercises);
        })
    }
  }

  refresh() {
    this.loadingRefresh = true;
    this.exercises = [];
    this.exercisesCacheService.set([]);
    this.ngOnInit();
  }

  tapped(exercise: ExerciseModelDTO) {
    console.log(exercise);
  }
}
