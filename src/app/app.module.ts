import { RouterModule, Routes } from '@angular/router'; //1.-importacion del ruteo

import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { PaquetesComponent } from './paquetes/paquetes.component';

const routes: Routes=[//2.- Creacion del objeto(componente)
  { path: 'inicio', component: InicioComponent},
  { path: 'paquetes', component: PaquetesComponent},
  { path: '', component: InicioComponent, pathMatch: 'full'}, //cuando este vacio la ruta lo redirecciona a esta
  { path: '**', redirectTo: '/', pathMatch: 'full'},//cuando el usuario escribe cuaqluier cosa, lo redireeciona a esta
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    FooterComponent,
    PaquetesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)//3.-llamando importacion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
