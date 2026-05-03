import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service'; // 🔥 ajoute ça

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

  constructor(private contactService: ContactService) {} // 🔥 injection

  send() {
    this.contactService.sendMessage(this.form).subscribe({
      next: () => {
        alert('Message envoyé 🚀');
        this.form = { name: '', email: '', message: '' }; // reset
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de l’envoi ❌');
      }
    });
  }
}