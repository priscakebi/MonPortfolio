import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  form = {
    name: '',
    email: '',
    message: ''
  };

  send() {
    console.log(this.form);
    alert('Message envoyé !');
  }
}