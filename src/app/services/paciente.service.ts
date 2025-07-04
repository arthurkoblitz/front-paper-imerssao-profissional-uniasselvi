import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PacienteRequest {
  nome: string;
  cpf: string;
  dataNascimento: string;
  sexo: string;
  telefone: string;
  email: string;
  endereco?: string;
  cidade: string;
  estado: string;
}

export interface PacienteResponse {
  id: string;
  nome: string;
  cpf: string;
  dataNascimento: string;
  sexo: string;
  telefone: string;
  email: string;
  endereco?: string;
  cidade: string;
  estado: string;
  criadoEm: string;
}

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  endpoint: string = "http://localhost:8080/paciente/cadastrar"

  constructor(private http: HttpClient) {}

  cadastrarPaciente(paciente: PacienteRequest): Observable<PacienteResponse> {
    return this.http.post<PacienteResponse>(this.endpoint, paciente, { reportProgress: true});
  }
}
