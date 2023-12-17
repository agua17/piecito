import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mujer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './mujer.component.html',
  styleUrl: './mujer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MujerComponent { }
