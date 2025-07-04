import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  @Input() data?: {
    title: string;
    buttons: { label?: string; imagemUrl?: string; matIcon?: string; route: string }[];
  };

  constructor(private router: Router) {}

  goToPage(route: string) {
    this.router.navigate([route]);
  }
}
