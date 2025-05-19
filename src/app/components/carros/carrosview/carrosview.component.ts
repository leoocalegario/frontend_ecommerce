import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../../../models/carro';
import { CarroService } from '../../../services/carros.service';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { PropostaService } from '../../../services/proposta.service';
import { Proposta } from '../../../models/proposta';

@Component({
  selector: 'app-carrosview',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './carrosview.component.html',
  styleUrl: './carrosview.component.scss'
})
export class CarrosviewComponent {

  router = inject(ActivatedRoute);
  carroService = inject(CarroService);
  propostaService = inject(PropostaService);

  carro: Carro = new Carro();
  proposta: Proposta = new Proposta();

  constructor(){
    let id = this.router.snapshot.params['id'];
    if(id > 0){
      this.findById(id);
    }else{
      if(this.carro.id_anuncio > 0)
        this.findById(id);
    }
  }

  findById(id: number){
    this.carroService.findById(id).subscribe({
      next: objeto => {
        this.carro = objeto;
      },
      error: erro => {
        alert('erro');
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
    
    console.log('Dados da proposta a serem enviados:', {
      valor_proposta: this.proposta.valor_proposta,
      nome_cliente: this.proposta.nome_cliente,
      telefone_cliente: this.proposta.telefone_cliente,
      email_cliente: this.proposta.email_cliente,
      anuncio_veiculo_id: this.proposta.anuncio_veiculo_id
    });

    this.propostaService.save(this.proposta).subscribe({
      next: retorno => {
        alert('Proposta enviada com sucesso');
        this.proposta = new Proposta();
      },
      error: erro => {
        console.error('Erro ao enviar proposta:', erro);
        alert('Erro ao enviar proposta. Por favor, tente novamente.');
      }
    });
  }
}