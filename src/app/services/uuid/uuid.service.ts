import * as uuid from 'uuid';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UuidService {
  get(): string {
    return uuid.v4();
  }

  isValid(uuid: string) {
    const regex = new RegExp('^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$');
    return regex.test(uuid);
  }
}
