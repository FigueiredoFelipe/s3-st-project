import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control, a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  label = input.required<string>();

  private el = inject(ElementRef); // Will inject att he HOST element.

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
  }
}
