import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://64933020428c3d2035d177f7.mockapi.io/api/products'; // URL de tu API

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = `${this.apiUrl}`; // Endpoint de la API para obtener datos
    return this.http.get<any>(url);
  }
}
