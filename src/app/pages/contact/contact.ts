import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  form = {
    name: '',
    email: '',
    message: ''
  };

  loading = false;

  constructor(private contactService: ContactService) { }

  send() {
    this.loading = true;

    this.contactService.sendMessage(this.form).subscribe({
      next: () => {
        alert('Message envoyé 🚀');

        // reset formulaire
        this.form = {
          name: '',
          email: '',
          message: ''
        };

        this.loading = false;
      },

      error: (err) => {
        console.error("ERREUR COMPLETE :", err);
        alert('Erreur : ' + (err?.error || 'inconnue'));

        if (this.loading) return;
      }

      
    });
  }
}