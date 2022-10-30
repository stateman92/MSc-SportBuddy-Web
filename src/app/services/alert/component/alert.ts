import {AlertType} from './alert.type';

export class Alert {
  constructor(public readonly type: AlertType, public readonly text: string) {
  }

  get cssStyle() {
    return 'alert alert-' + this.type
  }

  get isSuccess() {
    return this.type == AlertType.success
  }
}
