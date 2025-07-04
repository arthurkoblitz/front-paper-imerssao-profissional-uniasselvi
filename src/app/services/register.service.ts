import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
}

export interface RegisterResponse {
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  endpoint: string = "http://localhost:8080/auth/register"

  constructor(private http: HttpClient) {}

  cadastrarUsuario(register: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.endpoint, register, { reportProgress: true});
  }
}
