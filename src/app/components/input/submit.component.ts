import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sb-submit',
  templateUrl: './submit.component.html',
  styleUrls: []
})
export class SubmitComponent {
  @Input() disabled = false;
}
