import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {ApiService} from '../../services/api/api.service';
import {StorageService} from '../../services/storage/storage.service';
import {RouterService} from '../../services/routing/router.service';
import {CharacteristicsTypeDTO, DistanceTypeDTO, FullPositionTypeDTO, HalfPositionTypeDTO} from '../../OpenAPI';
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
      sequence: [
        {
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
          errors: [
            {
              characteristics: {
                firstHalfPositionType: HalfPositionTypeDTO.Around0,
                firstFullPositionType: FullPositionTypeDTO.Around0,
                secondFullPositionType: FullPositionTypeDTO.Around0,
                secondHalfPositionType: HalfPositionTypeDTO.Around0,
                distanceType: DistanceTypeDTO.Around0,
                type: CharacteristicsTypeDTO.Arms
              },
              error: 'string'
            }
          ]
        }
      ],
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
}
