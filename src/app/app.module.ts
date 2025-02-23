import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de rutas
import { AppComponent } from './app.component';
import { RecaptchaModule } from 'ng-recaptcha-2';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { OrganigramaComponent } from './pages/quienes-somos/organigrama/organigrama.component';
import { ObjetivosComponent } from './pages/quienes-somos/objetivos/objetivos.component';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ActividadesComponent,
    ProyectosComponent,
    ContactoComponent,
    GaleriaComponent,
    QuienesSomosComponent,
    OrganigramaComponent,
    ObjetivosComponent,
    RecaptchaModule,
    FormsModule,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

