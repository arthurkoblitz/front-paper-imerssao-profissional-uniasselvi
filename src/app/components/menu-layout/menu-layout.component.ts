import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-menu-layout',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './menu-layout.component.html',
  styleUrl: './menu-layout.component.scss'
})
export class MenuLayoutComponent {
  @Input() primaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();


  submit() {
    this.onSubmit.emit();
  }
}
