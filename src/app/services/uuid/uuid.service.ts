import * as uuid from 'uuid';
import {Injectable} from '@angular/core';
import {RegexService} from '../regex/regex.service';

@Injectable({providedIn: 'root'})
export class UuidService {
  constructor(
    private readonly regexService: RegexService
  ) {
  }

  get(): string {
    return uuid.v4();
  }

  isValid(uuid: string) {
    return this.regexService.isValid('^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$', uuid);
  }
}
