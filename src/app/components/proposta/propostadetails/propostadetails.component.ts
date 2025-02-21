import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PropostaService } from '../../../services/proposta.service';
import Swal from 'sweetalert2';
import { Proposta } from '../../../models/proposta';

@Component({
  selector: 'app-propostadetails',
  standalone: true,
  imports: [],
  templateUrl: './propostadetails.component.html',
  styleUrl: './propostadetails.component.scss'
})
export class PropostadetailsComponent {

  @Input("proposta") proposta: Proposta = new Proposta();
  @Output("retorno") retorno = new EventEmitter<any>();
  router = inject(ActivatedRoute);

  modalService = inject(MdbModalService);
  @ViewChild("modalPropostaView") modalPropostaView!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  propostaService = inject(PropostaService);

  constructor(){
    let id = this.router.snapshot.params['id'];
    if(id > 0){
      this.findById(id);
    }else{
      if(this.proposta.idProposta > 0)
        this.findById(id);
  }
}

  findById(id: number){
      
      this.propostaService.findById(id).subscribe({
        next: retorno => {
          this.proposta = retorno;
        },
        error: erro => {
          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      });
  
    }
}

