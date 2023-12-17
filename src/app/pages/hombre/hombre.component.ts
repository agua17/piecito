import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hombre',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './hombre.component.html',
  styleUrl: './hombre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HombreComponent { }
