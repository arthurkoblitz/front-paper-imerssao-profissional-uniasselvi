import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) {}
   menuItems = [
    { label: 'Menu', matIcon: 'home', action: 'home' },
    { label: 'Cadastro de paciente', matIcon: '', action: 'cadastro-paciente' },
  ];

  getRouterLink(action: string): string {
  switch (action) {
    case 'home':
      return '/menu';
    case 'cadastro-paciente':
      return '/cadastro-paciente';
    default:
      return '/';
  }
}

logout() {
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('username');

    sessionStorage.clear();

    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('auth-token');
  }

}
