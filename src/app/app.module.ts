import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ActoresComponent } from './actores/actores.component';
import { CinesComponent } from './cines/cines.component';
import { ActorviewComponent } from './actores/actorview/actorview.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    PeliculasComponent,
    ActoresComponent,
    CinesComponent,
    ActorviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
