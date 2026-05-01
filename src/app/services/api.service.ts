import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<any[]>(`${this.apiUrl}/projects`);
  }

  sendMessage(data: any) {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }
}