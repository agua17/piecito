import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TiendaComponent { }
