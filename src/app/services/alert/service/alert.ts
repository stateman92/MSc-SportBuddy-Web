import {AlertType} from "./alert.type";

export class Alert {
  constructor(private type: AlertType, private text: string) {
  }

  get cssStyle() {
    switch (this.type) {
      case AlertType.success:
        return 'alert alert-success';
      case AlertType.error:
        return 'alert alert-danger';
    }
  }
}
