import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PeliculaInterface} from '../common/pelicula-interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  // paso 1 servicios
  // inyectar dependencias del httpProvider
  //alternativa 1
  constructor(private http: HttpClient) { }
  //alternativa2
  //private http: HttpClient = inject(HttpClient)

  //paso2 servicio
  urlAPI = 'https://apimovies-nu.vercel.app/api/v1/movies/'
  //crear la funcion para la peticion
  getInfoPeliculas(): Observable<PeliculaInterface>{
    return this.http.get<PeliculaInterface>(this.urlAPI)
  }
}
