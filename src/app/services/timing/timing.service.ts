import {Injectable} from "@angular/core";
import {Timer} from "./components/timer";

@Injectable({providedIn: 'root'})
export class TimingService {
  setTimeout(callback: () => void, ms: number) {
    return new Timer(setTimeout(() => {
      callback()
    }, ms));
  }

  clearTimeout(timer: Timer | undefined) {
    return clearTimeout(timer?.timeout);
  }
}
