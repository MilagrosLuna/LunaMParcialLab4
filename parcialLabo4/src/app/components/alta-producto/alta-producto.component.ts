import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/clases/producto';
import { PaisesService } from 'src/app/servicios/paises.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css'],
})
export class AltaProductoComponent {
  productoCodigo: number = -1;
  productoDescripcion: string = '';
  productoPrecio: number = -1;
  productoStock: number = -1;
  productoComestible: boolean = false;
  selectedCountry: any = null;

  form!: FormGroup;
  checkError: boolean = false;
  errorMessage: string = '';
  constructor(
    private paisesService: PaisesService,
    private productoService: ProductosService
  ) {}

  ngOnInit(): void {
    this.paisesService.selectedCountry$.subscribe((country) => {
      this.selectedCountry = country;
    });
    this.form = new FormGroup({
      productoCodigo: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(1000),
      ]),
      productoDescripcion: new FormControl('', [Validators.required]),
      productoPrecio: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(1000),
      ]),
      productoStock: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(1000),
      ]),
      productoComestible: new FormControl('',[Validators.required]),
      selectedCountry: new FormControl(''),
    });
  }

  onSubmit() {
   
    if (this.form.valid && this.selectedCountry != null) {
      const producto = new Producto(        
        this.form.value.productoDescripcion,
        this.form.value.productoCodigo,
        this.form.value.productoPrecio,
        this.form.value.productoStock,
        this.form.value.productoComestible,
        this.selectedCountry.name
      );
      console.log(producto);
      this.productoService
        .guardarProductoBD(producto)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Alta de producto exitosa',
            text: 'producto agregado',
            timer: 1500,
            showConfirmButton: false,
          });
          this.form.reset();
        })
        .catch((error) => {
          this.errorMessage = error.message;
          Swal.fire({
            icon: 'error',
            title: 'Error al agregar el producto',
            text: this.errorMessage,
            timer: 4000,
          });
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
