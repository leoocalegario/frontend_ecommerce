import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Acessorio } from '../models/acessorio';
import { Observable, of, catchError } from 'rxjs';
import { environment } from '../../environments/environment';
import { getAcessoriosCatalogo } from '../mock-data/propostas-acessorios-marcas-mock';

@Injectable({
  providedIn: 'root'
})
export class AcessorioService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/acessorio";

  constructor() { }

  listAll(): Observable<Acessorio[]>{
    return this.http.get<Acessorio[]>(this.API+"/listAll").pipe(
      catchError(() => of(getAcessoriosCatalogo()))
    );
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  save(acessorio: Acessorio): Observable<string>{
    return this.http.post<string>(this.API+"/save", acessorio, {responseType: 'text' as 'json'});
  }

  update(acessorio: Acessorio, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, acessorio, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Acessorio>{
    return this.http.get<Acessorio>(this.API+"/findById/"+id).pipe(
      catchError(() => of(getAcessoriosCatalogo().find(a => a.id === id) as Acessorio))
    );
  }

}