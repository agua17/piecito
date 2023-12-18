import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../services/productos.service';
import { ProductoComponent } from '../../components/producto/producto.component';

@Component({
  selector: 'app-mujer',
  standalone: true,
  imports: [
    CommonModule,
    ProductoComponent,

  ],
  templateUrl: './mujer.component.html',
  styleUrl: './mujer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MujerComponent {
  public productos: Producto[] = [];

  constructor(private productoService: ProductosService) {

  }

  getProductosMujer(): Producto[] {
    return this.productoService.getProductos().filter(p => p.genero === 'Mujer')
  }
}
