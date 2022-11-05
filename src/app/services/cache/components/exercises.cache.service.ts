import {ExerciseModelDTO} from '../../../OpenAPI';
import {CacheService} from '../cache.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ExercisesCacheService extends CacheService<Array<ExerciseModelDTO>> {
}
