import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { activateGuard } from './guards/activate.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ListadoPublicoComponent } from './components/listado-publico/listado-publico.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'bienvenido', component: BienvenidaComponent },
  {
    path: 'altaProducto',
    canActivate: [activateGuard],
    component: AltaProductoComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
    children: [
      {
        path: 'altaProducto',
        canActivate: [activateGuard],
        component: AltaProductoComponent,
      },
      {
        path: 'listadoProductos',
        canActivate: [activateGuard],
        component: ListadoComponent,
      },     
    ],
  },
  {
    path: 'ListadoPublico',
    component: ListadoPublicoComponent,
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
