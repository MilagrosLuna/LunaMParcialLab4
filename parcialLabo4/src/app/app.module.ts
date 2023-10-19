import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { ListadoPaisesComponent } from './components/listado-paises/listado-paises.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { DetallePaisProductoComponent } from './components/detalle-pais-producto/detalle-pais-producto.component';
import { ListadoPublicoComponent } from './components/listado-publico/listado-publico.component';
import { ListadoComponent } from './components/listado/listado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContainersComponent } from './components/containers/containers.component';
import { ContainersADDComponent } from './components/containers-add/containers-add.component';

@NgModule({
  declarations: [AppComponent, BienvenidaComponent, LoginComponent, AltaProductoComponent, ListadoPaisesComponent, ListadoProductoComponent, DetalleProductoComponent, DetallePaisProductoComponent, ListadoPublicoComponent, ListadoComponent, InicioComponent, ContainersComponent, ContainersADDComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
