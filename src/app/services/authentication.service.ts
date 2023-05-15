import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY : string = "auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  urlBackend: string = "https://localhost:8080/"

  constructor(private http:HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'login', { email, password });
  }

  cerrarSesion(): void {
    window.sessionStorage.clear();
  }
  
  getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
  }

}
