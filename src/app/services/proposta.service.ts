import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Proposta } from '../models/proposta';
import { Observable, of, catchError } from 'rxjs';
import { environment } from '../../environments/environment';
import { PROPOSTAS_MOCK, listPropostasByAnuncioId, addPropostaMock } from '../mock-data/propostas-acessorios-marcas-mock';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  http = inject(HttpClient);
  API = environment.SERVIDOR+"/api/proposta"
  constructor() { }

  listAll(): Observable<Proposta[]>{ 
    return this.http.get<Proposta[]>(this.API+"/listAll").pipe(
      catchError(() => of(PROPOSTAS_MOCK))
    );
  }

  save(proposta: Proposta): Observable<string> {
    return this.http.post<string>(this.API + "/save", proposta, { responseType: 'text' as 'json' }).pipe(
      catchError(() => {
        addPropostaMock(proposta);
        return of('Proposta salva (mock)');
      })
    );
  }

  findById(id: number): Observable<Proposta>{
    return this.http.get<Proposta>(this.API+"/findById/"+id).pipe(
      catchError(() => of(PROPOSTAS_MOCK.find(p => p.id_proposta === id) as Proposta))
    );
  }

  listByAnuncio(anuncioId: number): Observable<Proposta[]> {
    return this.http.get<Proposta[]>(`${this.API}/listByAnuncio/${anuncioId}`).pipe(
      catchError(() => of(listPropostasByAnuncioId(anuncioId)))
    );
  }
}
