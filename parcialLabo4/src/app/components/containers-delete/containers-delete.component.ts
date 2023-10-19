import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicios/container.service';

@Component({
  selector: 'app-containers-delete',
  templateUrl: './containers-delete.component.html',
  styleUrls: ['./containers-delete.component.css']
})
export class ContainersDELETEComponent {
  @Input() containerSeleccionado!: Container;
  @Output() containerBorrado: EventEmitter<boolean> = new EventEmitter<boolean>();
  containerVacio: Container = new Container(0, '', '', 0);

  constructor(private containerService: ContainerService) {}

  async confirmarBorrarContainer() {
    const result = await Swal.fire({
      title: `¿Estás seguro de que deseas eliminar el contenedor con código ${this.containerSeleccionado.codigo}?`,
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      const exitoBorrado = await this.containerService.borrarContainerBD(this.containerSeleccionado.id);
      this.containerBorrado.emit(exitoBorrado);
      this.containerSeleccionado =this.containerVacio;
    }
  }
}
