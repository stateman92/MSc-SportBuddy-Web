import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sb-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  @Input() text = '';
}
