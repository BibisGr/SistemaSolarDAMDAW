import {Component, OnInit} from '@angular/core';
import {PlanetaObjectInterface} from '../../common/PlanetaObjectInterface';
import {PlanetaArrayInterface} from '../../common/planeta-array-interface';
import {PlanetaServicioService} from '../../servicios/planeta-servicio.service';

@Component({
  selector: 'app-planetario',
  imports: [],
  templateUrl: './planetario.component.html',
  styleUrl: './planetario.component.css'
})
export class PlanetarioComponent  implements OnInit{
  planetasObject!: PlanetaObjectInterface;
  planetaArray: PlanetaArrayInterface[] = [];

  constructor(private  planetaService : PlanetaServicioService) {
  }

  ngOnInit(): void {
    this.loadPlanetasObject();
    this.loadPlanetasArray();
  }

  private loadPlanetasObject() {
    this.planetaService.getPlanetasObject().subscribe(
      {
        next: data =>{
          this.planetasObject = data;
          console.log(this.planetasObject);
        },
        error: error => {
          console.log(error);
        },
        complete: () =>{
          console.log('data loaded complete')
        }
      }
    )
  }

  private loadPlanetasArray() {
    this.planetaService.getPlanetasArray().subscribe(
      {
        next: data =>{
          this.planetaArray = data;
          console.log(this.planetaArray);
        },
        error: error => {
          console.log(error);
        },
        complete: () =>{
          console.log('data loaded complete')
        }
      }
    )
  }
}
