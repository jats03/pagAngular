import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/AFAIS'; // URL del backend en Spring Boot

  constructor(private http: HttpClient) {}

  getDatos(url: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/`+url);
  }

  // Método para crear una nueva actividad
  enviarDatos(url: string, formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/`+url, formData); // Enviamos el FormData
  }

  login(url: string, usuario: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/`+url,{usuario, password}); // Enviamos el FormData
  }

  eliminarDatos(url: string) {
    return this.http.delete(`${this.apiUrl}/`+url)
  }
}
