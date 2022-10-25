import {Injectable} from "@angular/core";
import {Timer} from "./timer";

@Injectable({providedIn: 'root'})
export class TimingService {
  constructor() {
  }

  setTimeout(callback: () => void, ms: number) {
    return new Timer(setTimeout(() => {
      callback()
    }, ms));
  }

  clearTimeout(timer: Timer | undefined) {
    return clearTimeout(timer?.timeout);
  }
}
