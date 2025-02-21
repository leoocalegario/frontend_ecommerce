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
      if(this.carro.idAnuncio > 0)
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
    console.log('Carro:', this.carro);
    console.log('Proposta:', this.proposta);

    this.proposta.anuncioveiculo = this.carro;
    this.propostaService.save(this.proposta).subscribe({
      next: retorno => {
        alert('Proposta enviada com sucesso');
      },
      error: erro => {
        console.error('Erro ao enviar proposta:', erro);
        alert('Erro ao enviar proposta');
      }
    });
  }
  

  
}