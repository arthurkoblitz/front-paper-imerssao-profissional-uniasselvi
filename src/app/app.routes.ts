import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { RegisterLayoutComponent } from './components/register-layout/register-layout.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "cadastro-paciente",
    component: CadastroPacienteComponent
  },
  {
    path: "registrar",
    component: RegisterComponent
  },
  
];
