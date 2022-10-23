import {AlertType} from "./alert.type";

export class Alert {
  constructor(private type: AlertType, public text: string) {
  }

  get cssStyle() {
    return 'alert alert-' + this.type
  }
}
