import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class RegexService {
  isValid(regExPattern: string, text: string) {
    const regex = new RegExp(regExPattern);
    return regex.test(text);
  }
}
