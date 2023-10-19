import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicios/container.service';

@Component({
  selector: 'app-containers-modify',
  templateUrl: './containers-modify.component.html',
  styleUrls: ['./containers-modify.component.css'],
})
export class ContainersMODIFYComponent {
  @Input() containerSeleccionado!: Container;
  @Output() containerModificado: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  form!: FormGroup;
  checkError: boolean = false;
  errorMessage: string = '';

  constructor(private containerService: ContainerService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      containerColor: new FormControl('', [Validators.required]),
      containerEmpresa: new FormControl('', [Validators.required]),      
      containerCapacidad: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000),
      ]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const containerActualizado = new Container(
        this.containerSeleccionado.codigo,
        this.form.value.containerColor,
        this.form.value.containerEmpresa,
        this.form.value.containerCapacidad,
        this.containerSeleccionado.id
      );
      console.log(containerActualizado);
      this.containerService
        .actualizarContainerBD(containerActualizado)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Modificación de contenedor exitosa',
            text: 'Contenedor modificado',
            timer: 1500,
            showConfirmButton: false,
          });

          this.containerModificado.emit(true);
          this.form.reset();
        })
        .catch((error) => {
          this.errorMessage = error.message;
          Swal.fire({
            icon: 'error',
            title: 'Error al modificar el contenedor',
            text: this.errorMessage,
            timer: 4000,
          });

          this.containerModificado.emit(false);
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error, complete los datos correctamente',
        timer: 2500,
      });
    }
  }
}
