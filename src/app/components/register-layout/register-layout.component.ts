import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-layout',
  standalone: true,
  imports: [],
  templateUrl: './register-layout.component.html',
  styleUrl: './register-layout.component.scss'
})
export class RegisterLayoutComponent {
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Output("submit") onSubmit = new EventEmitter();
  
  constructor(private router : Router) {

  }
    submit() {
      this.onSubmit.emit();
    }

    goToPage() {
    this.router.navigate(["/login"]);
  }
}
