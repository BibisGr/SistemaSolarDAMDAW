import {Component, inject, OnInit} from '@angular/core';
import {PeliculaInterface} from '../../common/pelicula-interface';
import {PeliculaService} from '../../servicios/pelicula.service';

@Component({
  selector: 'app-peliculas',
  imports: [],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit{
   //paso 1 crear objeto que guardar'a la info de peliculas
  peliculas!: PeliculaInterface;

  //paso 2 inyectar depencia del servicio
  //variante 1
  private servicioPelicula: PeliculaService = inject(PeliculaService);
  //variante 2
  // constructor(servicio: PeliculaService) {
  // }

  //paso 3 implementar el OnInit
  ngOnInit(): void {
    this.loadPeliculas();
  }

  //paso 4 crear la funcion para cargar la m'etodo para cargar la data
  private loadPeliculas() {
    //paso 5 gestionar el suscriber
    this.servicioPelicula.getInfoPeliculas().subscribe(
      {
        next: data =>{
          this.peliculas = data;
          console.log(this.peliculas);
        },
        error: error =>{
          console.log('Error: ' + error)
        },
        complete: () => {
          console.log('process completed')
        }
      }
    )
  }
}
