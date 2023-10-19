import { Component, Input } from '@angular/core';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicios/container.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css'],
})
export class ContainersComponent {
  @Input() container!: Container;

  selectedContainer: any = null;
  containers: Container[] = [];

  constructor(private containerService: ContainerService) {}

  ngOnInit() {
    this.cargarContainers();
  }

  async cargarContainers() {
    try {
      const containersData = await this.containerService.traerContainersBd();
      this.containers = containersData;
      console.log(this.containers);

      Swal.fire({
        icon: 'success',
        title: 'Containers',
        text: 'Cargando Containers...',
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

  OnContainerCreado(container: Container) {
    this.containerService
      .guardarContainerBD(container)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Alta de Container exitosa',
          text: 'Container agregado',
          timer: 1500,
          showConfirmButton: false,
        });
        this.cargarContainers();
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al agregar el contenedor',
          text: error.message,
          timer: 4000,
        });
      });
  }

  OnContainerBorrado(borrado: boolean) {
    if (borrado) {
      this.cargarContainers();
    }
  }

  OnContainerModificado(modificado: boolean) {
    if (modificado) {
      this.cargarContainers();
    }
  }

  OnSelectContainer(container: Container) {
    this.selectedContainer = container;
  }
}
