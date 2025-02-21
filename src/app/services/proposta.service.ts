import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Proposta } from '../models/proposta';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  http = inject(HttpClient);
  API = environment.SERVIDOR+"/api/proposta"
  constructor() { }

  listAll(): Observable<Proposta[]>{ 
    return this.http.get<Proposta[]>(this.API+"/listAll");
  }

  save(proposta: Proposta): Observable<string> {
    return this.http.post<string>(this.API + "/save", proposta, { responseType: 'text' as 'json' });
  }

  findById(id: number): Observable<Proposta>{
    return this.http.get<Proposta>(this.API+"/findById/"+id);
  }
}
