import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control, a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent {
  label = input.required<string>();
}
