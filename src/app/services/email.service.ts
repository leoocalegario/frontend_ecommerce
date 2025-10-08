import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  enviarProposta(dadosProposta: any): Observable<string> {
    // Simula o envio de email
    console.log('=== EMAIL ENVIADO ===');
    console.log('Para: arineto10@hotmail.com');
    console.log('Assunto: Nova Proposta de Veículo');
    console.log('Dados da Proposta:');
    console.log('- Nome:', dadosProposta.nome_cliente);
    console.log('- Telefone:', dadosProposta.telefone_cliente);
    console.log('- Email:', dadosProposta.email_cliente);
    console.log('- Valor da Proposta: R$', dadosProposta.valor_proposta);
    console.log('- Veículo ID:', dadosProposta.anuncio_veiculo_id);
    console.log('===================');
    
    // Em um sistema real, aqui seria feita a chamada para um serviço de email
    // como SendGrid, Mailgun, ou um backend que envie emails
    
    return of('Email enviado com sucesso para arineto10@hotmail.com');
  }
}
