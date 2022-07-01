import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresComponent } from './actores/actores.component';
import { CinesComponent } from './cines/cines.component';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "peliculas", component: PeliculasComponent },
  { path: "actores", component: ActoresComponent },
  { path: "cines", component: CinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
