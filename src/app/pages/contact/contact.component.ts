import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  nameFocused: boolean = false;
  emailFocused: boolean = false;
  descFocused: boolean = false;

  name: string = '';
  email: string = '';

  constructor() {}

  clickName(e: any) {
    this.nameFocused = true;
  }

  clickEmail(e: any) {
    this.emailFocused = true;
  }

  clickDesc(e: any) {
    this.descFocused = true;
  }

  submit(e: any) {
    if(this.name && this.email) {
      document.forms.item(0)?.submit();
    } else {
      console.log('eaqw')
    }
  }
}
