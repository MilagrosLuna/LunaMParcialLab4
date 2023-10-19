import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { PaisesService } from 'src/app/servicios/paises.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  
  @Input() pizza!: Producto;

  productos: Producto[] = [];
  pais: any;

  productoSele: any = null;

  constructor(
    private productosService: ProductosService,
    private paisesService: PaisesService
  ) {}
 

  ngOnInit() {
    this.cargarProdcutos();
  }

  async cargarProdcutos() {
    try {
      const RepartidoresData =
        await this.productosService.traerProductosBd();
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

  OnSelectproducto(producto:Producto){
    this.productoSele = producto;
    this.paisesService
    .getCountryByName(this.productoSele.pais)
    .subscribe((response: any) => {
      this.pais = response[0]; 
    });
  }

 
}
