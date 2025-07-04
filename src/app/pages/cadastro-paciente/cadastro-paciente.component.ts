import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CadastroPacienteLayoutComponent } from '../../components/cadastro-paciente-layout/cadastro-paciente-layout.component';
import { PacienteService } from '../../services/paciente.service';
import { NgIf } from '@angular/common';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { RegisterLayoutComponent } from "../../components/register-layout/register-layout.component";

@Component({
  selector: 'app-cadastro-paciente',
  standalone: true,
  templateUrl: './cadastro-paciente.component.html',
  imports: [CadastroPacienteLayoutComponent, ReactiveFormsModule, NgIf, PrimaryInputComponent],
  styleUrls: ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent {

  pacienteForm!: FormGroup;
  enviado = false;

  constructor(private paciente : PacienteService ,private toastService: ToastrService) {
    this.pacienteForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)]),
      dataNascimento: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      endereco: new FormControl(''),
      cidade: new FormControl('', Validators.required),
      estado: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)])
    });
  }

  submit() {
  this.enviado = true;

  if (this.pacienteForm.valid) {
    const paciente = this.pacienteForm.value;

    this.paciente.cadastrarPaciente(paciente).subscribe({
      next: () => {
        this.toastService.success('Cadastro de paciente realizado com sucesso!', 'Sucesso');
        this.pacienteForm.reset();
        this.enviado = false;
      },
      error: () => {
        this.toastService.error('Falha ao realizar cadastro de paciente.', 'Erro');
      }
    });
  } else {
    this.toastService.warning('Por favor, preencha todos os campos corretamente.', 'Formulário inválido');
  }
}
}
