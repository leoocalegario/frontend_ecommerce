import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Carro } from '../models/carro';
import { Observable, of, catchError } from 'rxjs';
import { environment } from '../../environments/environment';
import { getCarrosDetalhados, getCarroDetalhadoById, searchCarrosDetalhados } from '../mock-data/carros-detalhados-mock';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/anuncioveiculo";
  constructor() { }

  listAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API+"/findAll").pipe(
      catchError(() => {
        console.log('Backend não disponível, usando dados mock');
        return of(getCarrosDetalhados());
      })
    );
  }

  delete( id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  save(carro: Carro): Observable<string>{
    console.log(carro);
    return this.http.post<string>(this.API+"/save", carro, {responseType: 'text' as 'json'});
  }

  update(carro: Carro, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, carro, {responseType: 'text' as 'json'});
  }

  findById(id:number): Observable<Carro>{
    return this.http.get<Carro>(this.API+"/findById/"+id).pipe(
      catchError(() => {
        console.log('Backend não disponível, usando dados mock');
        const carro = getCarroDetalhadoById(id);
        return carro ? of(carro) : of(new Carro());
      })
    );
  }

  findByModeloLike(pesquisa:string): Observable<Carro[]>{
    return this.http.get<Carro[]>(this.API+"/findByModeloLike?modelo="+pesquisa).pipe(
      catchError(() => {
        console.log('Backend não disponível, usando dados mock');
        return of(searchCarrosDetalhados(pesquisa));
      })
    );
  }
}