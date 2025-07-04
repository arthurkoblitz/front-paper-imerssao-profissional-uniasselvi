import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginLayoutComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private toastService: ToastrService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;

    this.loginService.login(email, password).subscribe({
      next: (res) => {
        this.toastService.success('Login realizado com sucesso!', 'Sucesso');
        this.router.navigate(['/menu']);
      },
      error: () => {
        this.toastService.error('Falha ao realizar login. Verifique suas credenciais.', 'Erro');
      }
    });
  } else {
    this.toastService.warning('Por favor, preencha todos os campos corretamente.', 'Formulário inválido');
  }
}
}
