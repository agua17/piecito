import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TiendaComponent { }
