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
    const propostaToSend = {
      valor_proposta: proposta.valorProposta,
      nome_cliente: proposta.nomeCliente,
      telefone_cliente: proposta.telefoneCliente,
      email_cliente: proposta.emailCliente,
      anuncio_veiculo_id: proposta.anuncioveiculo.id_anuncio
    };
    return this.http.post<string>(this.API + "/save", propostaToSend, { responseType: 'text' as 'json' });
  }

  findById(id: number): Observable<Proposta>{
    return this.http.get<Proposta>(this.API+"/findById/"+id);
  }
}
