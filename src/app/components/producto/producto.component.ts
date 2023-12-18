import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductoComponent {
  @Input()
  public producto?: Producto;

}
