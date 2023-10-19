import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/clases/container';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-containers-add',
  templateUrl: './containers-add.component.html',
  styleUrls: ['./containers-add.component.css'],
})
export class ContainersADDComponent {
  containerCodigo: number = -1;
  containerColor: string = '';
  containerEmpresa: string = '';
  containerCapacidad: number = -1;

  form!: FormGroup;
  checkError: boolean = false;
  errorMessage: string = '';

  @Output() containerGenerado = new EventEmitter<any>();

  ngOnInit(): void {
    this.form = new FormGroup({
      containerCodigo: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(99),
      ]),
      containerColor: new FormControl('', [Validators.required]),
      containerEmpresa: new FormControl('', [Validators.required]),
      containerCapacidad: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(99),
      ]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const container = new Container(
        this.form.value.containerCodigo,
        this.form.value.containerColor,
        this.form.value.containerEmpresa,
        this.form.value.containerCapacidad
      );
      console.log(container);
      this.containerGenerado.emit(container);
      this.form.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error, complete los datos correctamente',
        timer: 2500,
      });
    }
  }
}
