import * as uuid from 'uuid';
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class UuidService {
  get(): string {
    return uuid.v4();
  }
}
