import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://monportfolio-backend.onrender.com/api/contact';

  sendMessage(data: ContactMessage) {
    return this.http.post(this.apiUrl, data, { responseType: 'text' });
  }
}
