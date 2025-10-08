import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../../../models/carro';
import { CarroService } from '../../../services/carros.service';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { PropostaService } from '../../../services/proposta.service';
import { Proposta } from '../../../models/proposta';
import { CurrencyPipe } from '../../../pipes/currency.pipe';
import { getCarroDetalhadoById } from '../../../mock-data/carros-detalhados-mock';
import { EmailService } from '../../../services/email.service';

@Component({
  selector: 'app-carrosview',
  standalone: true,
  imports: [CommonModule, MdbFormsModule, FormsModule, CurrencyPipe],
  templateUrl: './carrosview.component.html',
  styleUrl: './carrosview.component.scss'
})
export class CarrosviewComponent {

  router = inject(ActivatedRoute);
  carroService = inject(CarroService);
  propostaService = inject(PropostaService);
  emailService = inject(EmailService);

  carro: Carro = new Carro();
  proposta: Proposta = new Proposta();

  constructor(){
    let id = this.router.snapshot.params['id'];
    console.log('ID recebido:', id);
    if(id > 0){
      // Primeiro tenta carregar dos dados mock
      const carroMock = getCarroDetalhadoById(Number(id));
      if (carroMock) {
        this.carro = carroMock;
        console.log('Carro carregado dos dados mock:', this.carro);
      } else {
        // Se não encontrar nos dados mock, tenta o serviço
        this.findById(id);
      }
    }else{
      if(this.carro.id_anuncio > 0)
        this.findById(id);
    }
  }

  findById(id: number){
    this.carroService.findById(id).subscribe({
      next: objeto => {
        this.carro = objeto;
        console.log('Carro carregado:', this.carro);
      },
      error: erro => {
        console.log('Erro ao carregar carro do backend, tentando dados mock:', erro);
        // Tentar carregar dos dados mock
        const carroMock = getCarroDetalhadoById(id);
        if (carroMock) {
          this.carro = carroMock;
          console.log('Carro carregado dos dados mock:', this.carro);
        } else {
          alert('Carro não encontrado');
        }
      }
    });
  }

  enviarProposta(){
    if (!this.proposta.nome_cliente || !this.proposta.telefone_cliente || 
        !this.proposta.email_cliente || !this.proposta.valor_proposta) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    if (!this.carro || !this.carro.id_anuncio) {
      alert('Erro: Carro não encontrado');
      return;
    }

    this.proposta.anuncio_veiculo_id = this.carro.id_anuncio;
    
    // Enviar email com os dados da proposta
    this.emailService.enviarProposta(this.proposta).subscribe({
      next: retorno => {
        console.log('Email enviado:', retorno);
        
        // Salvar a proposta no sistema
        this.propostaService.save(this.proposta).subscribe({
          next: retornoProposta => {
            alert('Proposta enviada com sucesso! Você receberá um email de confirmação em arineto10@hotmail.com');
            this.proposta = new Proposta();
          },
          error: erro => {
            console.error('Erro ao salvar proposta:', erro);
            alert('Proposta enviada por email, mas houve erro ao salvar no sistema.');
          }
        });
      },
      error: erro => {
        console.error('Erro ao enviar email:', erro);
        alert('Erro ao enviar proposta por email. Por favor, tente novamente.');
      }
    });
  }
}