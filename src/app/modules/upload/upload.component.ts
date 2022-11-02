import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {ApiService} from '../../services/api/api.service';
import {StorageService} from '../../services/storage/storage.service';
import {RouterService} from '../../services/routing/router.service';
import {
  CharacteristicsTypeDTO,
  DistanceTypeDTO,
  ExerciseErrorDTO,
  ExerciseMomentDTO,
  FullPositionTypeDTO,
  HalfPositionTypeDTO
} from '../../OpenAPI';
import {UuidService} from '../../services/uuid/uuid.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent extends BaseComponent implements OnInit {
  loading = false;
  sequenceCount = 1;
  delay = 0;
  videoId = '';
  name = '';
  details = '';
  sequence: ExerciseMomentDTO[] = [this.defaultItem()];

  constructor(
    private readonly apiService: ApiService,
    private readonly uuidService: UuidService,
    storageService: StorageService,
    routerService: RouterService
  ) {
    super(storageService, routerService);
  }

  upload() {
    this.loading = true;
    this.apiService.uploadExercise({
      id: this.uuidService.get(),
      sequence: this.sequence,
      sequenceCount: this.sequenceCount,
      delay: this.delay,
      videoId: this.videoId,
      name: this.name,
      details: this.details
    })
      .subscribe(
        _ => {
          this.loading = false;
        },
        _ => {
          this.loading = false;
        });
  }

  addNewItem() {
    this.sequence.push(this.defaultItem());
  }

  addNewError(id: string) {
    const index = this.sequence.findIndex(object => {
      return object.id === id;
    });
    const errors = this.sequence[index].errors;
    if (errors === null || errors === undefined) {
      this.sequence[index].errors = [this.defaultError()];
    } else {
      this.sequence[index].errors.push(this.defaultError());
    }
  }

  removeItem(moment: ExerciseMomentDTO) {
    this.sequence = this.sequence.filter(object => {
      return object.id !== moment.id;
    });
  }

  removeError(error: ExerciseErrorDTO) {
    const index = this.sequence.findIndex(object => {
      return object.errors.some(object => {
        return object.id === error.id;
      })
    });
    const newErrors = this.sequence[index].errors.filter(object => {
      return object.id !== error.id;
    });
    if (newErrors !== null && newErrors !== undefined) {
      this.sequence[index].errors = newErrors;
    } else {
      this.sequence[index].errors = [];
    }
  }

  private defaultItem(): ExerciseMomentDTO {
    return {
      id: this.uuidService.get(),
      armCharacteristics: {
        firstHalfPositionType: HalfPositionTypeDTO.Around0,
        firstFullPositionType: FullPositionTypeDTO.Around0,
        secondFullPositionType: FullPositionTypeDTO.Around0,
        secondHalfPositionType: HalfPositionTypeDTO.Around0,
        distanceType: DistanceTypeDTO.Around0,
        type: CharacteristicsTypeDTO.Arms
      },
      legCharacteristics: {
        firstHalfPositionType: HalfPositionTypeDTO.Around0,
        firstFullPositionType: FullPositionTypeDTO.Around0,
        secondFullPositionType: FullPositionTypeDTO.Around0,
        secondHalfPositionType: HalfPositionTypeDTO.Around0,
        distanceType: DistanceTypeDTO.Around0,
        type: CharacteristicsTypeDTO.Arms
      },
      errors: [this.defaultError()]
    };
  }

  private defaultError(): ExerciseErrorDTO {
    return {
      id: this.uuidService.get(),
      characteristics: {
        firstHalfPositionType: HalfPositionTypeDTO.Around0,
        firstFullPositionType: FullPositionTypeDTO.Around0,
        secondFullPositionType: FullPositionTypeDTO.Around0,
        secondHalfPositionType: HalfPositionTypeDTO.Around0,
        distanceType: DistanceTypeDTO.Around0,
        type: CharacteristicsTypeDTO.Arms
      },
      error: 'string'
    };
  }
}
