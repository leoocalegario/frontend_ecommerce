import { Component, EventEmitter, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { Proposta } from '../../../models/proposta';
import { MdbModalService, MdbModalRef, MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { PropostaService } from '../../../services/proposta.service';
import { PropostadetailsComponent } from "../propostadetails/propostadetails.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-propostalist',
    standalone: true,
    templateUrl: './propostalist.component.html',
    styleUrl: './propostalist.component.scss',
    imports: [PropostadetailsComponent,MdbModalModule,RouterLink]
})
export class PropostalistComponent {

  lista: Proposta[] = [];
  propostaselecionada: Proposta = new Proposta();
  @Output("retorno") retorno = new EventEmitter<any>();

  modalService = inject(MdbModalService);
  @ViewChild("modalPropostaView") modalPropostaView!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  propostaService = inject(PropostaService);
  
  constructor(){
    this.listAll();
    let selecionado = history.state.propostaSelecionado;
    if(selecionado != null){
      let indice = this.lista.findIndex((x) => {
        return x.idProposta == selecionado.id;
      });
      this.lista[indice] = selecionado;
    }
  }

  listAll(){
    this.propostaService.listAll().subscribe({
      next: lista => { 
        this.lista = lista;
      },
      error: erro => { 
        console.log(erro);
      }
    });
  }

  viewById(proposta:Proposta){
    this.propostaselecionada = Object.assign({}, proposta);
    this.modalRef = this.modalService.open(this.modalPropostaView);
  }


  retornoDetalhe(proposta:Proposta){
    this.listAll();
    this.modalRef.close();
  }
  

}
