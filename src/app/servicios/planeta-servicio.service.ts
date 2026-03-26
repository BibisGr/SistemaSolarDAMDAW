import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlanetaObjectInterface} from '../common/PlanetaObjectInterface';
import {PlanetaArrayInterface} from '../common/planeta-array-interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetaServicioService {

  urlObject: string = 'data/dataObject.json'
  urlArray: string = 'data/dataArray.json'

  //private http: HttpClient = inject(HttpClient);
  constructor( private http: HttpClient) { }

  getPlanetasObject(): Observable<PlanetaObjectInterface> {
    return this.http.get<PlanetaObjectInterface>(this.urlObject)
  }

  getPlanetasArray(): Observable<PlanetaArrayInterface[]> {
    return this.http.get<PlanetaArrayInterface[]>(this.urlArray)
  }
}
