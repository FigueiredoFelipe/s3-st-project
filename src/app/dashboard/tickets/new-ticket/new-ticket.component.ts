import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // onSubmit(titleElement: HTMLInputElement) {
  //   console.log(`SUBMITTED!`);
  //   console.log(titleElement);
  //   console.dir(titleElement);
  //   console.log(titleElement.value);
  //   const enteredTitle = titleElement.value;
  //   console.log('THE ENTERED TITLE WAS: ' + enteredTitle);
  // }

  //ViewChild
  // @ViewChild('form2') private form2?: ElementRef<HTMLFormElement>;
  //Another way to use ViewChild, but as a Function
  private form2 = viewChild.required<ElementRef<HTMLFormElement>>('form2');

  onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
    console.log(title);
    console.log(ticketText);
    // form.reset();
    this.form2()?.nativeElement.reset();
  }
}
