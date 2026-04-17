import { Routes } from '@angular/router';
import {PlanetarioComponent} from './componentes/planetario/planetario.component';
import {PeliculasComponent} from './componentes/peliculas/peliculas.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/planetario',
    pathMatch: "full"
  },
  {
    path: 'planetario',
    component: PlanetarioComponent
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
  },


];
