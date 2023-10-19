import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
  checkError: boolean = false;
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService
        .login(this.form.value)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: 'bienvenido',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            this.router.navigate(['/altaProducto']);
          });
        })
        .catch((error) => {
          this.checkError = true;
          switch (error.code) {
            case 'auth/invalid-email':
            case 'auth/user-not-found':
            case 'auth/wrong-password':
            case 'auth/internal-error':
            case 'auth/too-many-requests':
            case 'auth/invalid-login-credentials':
              this.errorMessage = `Credenciales inválidas`;
              break;
            default:
              this.errorMessage = error.message;
              break;
          }
          Swal.fire({
            icon: 'error',
            title: 'Error de inicio de sesión',
            text: this.errorMessage,
            timer: 4000,
          });
        });
    }
  }
  autoLogin() {
    this.form.controls['email'].setValue(this.authService.demoUser.email);
    this.form.controls['password'].setValue(this.authService.demoUser.password);
  }
  accesoRapido(): void {
    this.autoLogin();
    this.authService
      .login(this.form.value)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: 'bienvenido',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.router.navigate(['/altaProducto']);
        });
      })
      .catch((error) => {
        this.checkError = true;
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-not-found':
          case 'auth/wrong-password':
          case 'auth/internal-error':
          case 'auth/too-many-requests':
          case 'auth/invalid-login-credentials':
            this.errorMessage = `Credenciales inválidas`;
            break;
          default:
            this.errorMessage = error.message;
            break;
        }
        Swal.fire({
          icon: 'error',
          title: 'Error de inicio de sesión',
          text: this.errorMessage,
          timer: 4000,
        });
      });
  }
}
