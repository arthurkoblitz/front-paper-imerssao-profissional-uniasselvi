import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgIf } from '@angular/common';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { RegisterService } from '../../services/register.service';
import { RegisterLayoutComponent } from '../../components/register-layout/register-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RegisterLayoutComponent, ReactiveFormsModule, NgIf, PrimaryInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup;
  enviado = false;

  constructor(private registerService : RegisterService ,private toastService: ToastrService, private router: Router) {
    this.registerForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cpf: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {

  if (this.registerForm.valid) {
    const register = this.registerForm.value;

    this.registerService.cadastrarUsuario(register).subscribe({
      next: () => {
        this.toastService.success('Cadastro de paciente realizado com sucesso!', 'Sucesso');
        this.registerForm.reset();
        this.router.navigate(['/menu']);
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

