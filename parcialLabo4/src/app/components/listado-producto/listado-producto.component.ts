import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css'],
})
export class ListadoProductoComponent {
  
  @Input() productos: Producto[] = [];
  
  @Output() prodcutoSeleccionada = new EventEmitter<any>();

  productoSele: any = null;

  
  selectProducto(productos: any) {
    this.productoSele = productos;
    this.prodcutoSeleccionada.emit(productos);
  }

}
