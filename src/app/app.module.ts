import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { VentasCorporativasComponent } from './public/ventas-corporativas/ventas-corporativas.component';
import { CatalogoComponent } from './public/catalogo/catalogo.component';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './private/user/user-login/user-login.component';
import { UserNewComponent } from './private/user/user-new/user-new.component';
import { ComprasComponent } from './private/compras/compras.component';
import { ConocenosComponent } from './public/conocenos/conocenos.component';

import { MarcasComponent } from './public/marcas/marcas.component';
import { OfertasComponent } from './public/ofertas/ofertas.component';
import { CategoriaAccionComponent } from './public/categoria-accion/categoria-accion.component';
import { SuscribeteComponent } from './public/suscribete/suscribete.component';
import { TerminosComponent } from './public/terminos/terminos.component';
import { HttpClientModule } from '@angular/common/http';
import { __values } from 'tslib';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VentasCorporativasComponent,
    CatalogoComponent,
    UserLoginComponent,
    UserNewComponent,
    ComprasComponent,
    ConocenosComponent,

    MarcasComponent,
    OfertasComponent,
    CategoriaAccionComponent,
    SuscribeteComponent,
    TerminosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



