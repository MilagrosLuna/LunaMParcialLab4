import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-publico',
  templateUrl: './listado-publico.component.html',
  styleUrls: ['./listado-publico.component.css'],
})
export class ListadoPublicoComponent {
  @Input() pizza!: Producto;

  productos: Producto[] = [];

  productoSele: any = null;

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.cargarProdcutos();
  }

  async cargarProdcutos() {
    try {
      const RepartidoresData =
        await this.productosService.traerProductosConStockMayorACero();
      this.productos = RepartidoresData;
      console.log(this.productos);

      Swal.fire({
        icon: 'success',
        title: 'Productos',
        text: 'Cargando Productos...',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        timer: 4000,
      });
    }
  }
  OnSelectproducto(producto: Producto) {
    this.productoSele = producto;
  }
}
