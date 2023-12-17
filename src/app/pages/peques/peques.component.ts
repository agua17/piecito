import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-peques',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './peques.component.html',
  styleUrl: './peques.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PequesComponent { }
