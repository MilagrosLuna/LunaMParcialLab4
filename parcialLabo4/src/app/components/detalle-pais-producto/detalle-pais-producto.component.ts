import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pais-producto',
  templateUrl: './detalle-pais-producto.component.html',
  styleUrls: ['./detalle-pais-producto.component.css'],
})
export class DetallePaisProductoComponent {
  @Input() pais: any;
}
