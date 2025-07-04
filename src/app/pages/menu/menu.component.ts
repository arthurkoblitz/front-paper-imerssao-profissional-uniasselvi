import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from '../../components/card-item/card-item.component';
import { MenuLayoutComponent } from '../../components/menu-layout/menu-layout.component';

@Component({
  selector: 'app-menu-principal',
  standalone: true,
  imports: [
    CommonModule,
    CardItemComponent,
    MenuLayoutComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  items = [
  {
    title: 'Cadastro de Paciente',
    buttons: [
      { label: 'Cadastro de Paciente', imagemUrl:'', matIcon:'drive_folder_upload', route: '/cadastro-paciente' }
    ]
  }
];
}
