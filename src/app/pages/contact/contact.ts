import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactMessage, ContactService } from '../../services/contact.service';
import { PROFILE } from '../../data/portfolio.data';
import { Reveal } from '../../shared/reveal.directive';

type Status = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly contactService = inject(ContactService);

  protected readonly profile = PROFILE;
  protected readonly maxLength = 1000;

  protected form: ContactMessage = { name: '', email: '', message: '' };
  protected readonly status = signal<Status>('idle');
  protected readonly copied = signal(false);

  protected send(ngForm: NgForm): void {
    if (ngForm.invalid) {
      ngForm.control.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    this.contactService.sendMessage(this.form).subscribe({
      next: () => {
        this.status.set('success');
        ngForm.resetForm();
        this.form = { name: '', email: '', message: '' };
      },
      error: (err) => {
        console.error("Erreur lors de l'envoi du message :", err);
        this.status.set('error');
      },
    });
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      window.location.href = `mailto:${this.profile.email}`;
    }
  }
}
