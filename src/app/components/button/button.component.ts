import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sb-button',
  templateUrl: './button.component.html',
  styleUrls: []
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() class = '';
  @Input() loading = false;
  @Input() translate = '';
  @Output() clicked = new EventEmitter();

  onClick(event: Event) {
    if (!this.disabled) {
      this.clicked.emit();
    } else {
      event.stopPropagation();
    }
  }
}
