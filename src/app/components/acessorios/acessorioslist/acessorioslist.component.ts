import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { Acessorio } from '../../../models/acessorio';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { AcessoriosdetailsComponent } from '../acessoriosdetails/acessoriosdetails.component';
import { AcessorioService } from '../../../services/acessorio.service';

@Component({
  selector: 'app-acessorioslist',
  standalone: true,
  imports: [RouterLink, MdbModalModule, AcessoriosdetailsComponent],
  templateUrl: './acessorioslist.component.html',
  styleUrl: './acessorioslist.component.scss',
})
export class AcessorioslistComponent {
  lista: Acessorio[] = [];
  acessorioEdit: Acessorio = new Acessorio('');

  @Input('esconderBotoes') esconderBotoes: boolean = false;
  @Output('retorno') retorno = new EventEmitter<any>();

  modalService = inject(MdbModalService);
  @ViewChild('modalAcessorioDetalhe') modalAcessorioDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  acessorioService = inject(AcessorioService);

  constructor() {
    this.listAll();

    let acessorioNovo = history.state.acessorioNovo;
    let acessorioEditado = history.state.acessorioEditado;

    if (acessorioNovo != null) {
      acessorioNovo.id = 555;
      this.lista.push(acessorioNovo);
    }

    if (acessorioEditado != null) {
      let indice = this.lista.findIndex((x) => {
        return x.id == acessorioEditado.id;
      });
      this.lista[indice] = acessorioEditado;
    }
  }

  listAll() {
    this.acessorioService.listAll().subscribe({
      next: (lista) => {
        this.lista = lista;
      },
      error: (erro) => {
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      },
    });
  }

  deleteById(acessorio: Acessorio) {
    Swal.fire({
      title: 'Tem certeza que deseja deletar este registro?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        this.acessorioService.delete(acessorio.id).subscribe({
          next: (mensagem) => {
            Swal.fire({
              title: mensagem,
              icon: 'success',
              confirmButtonText: 'Ok',
            });

            this.listAll();
          },
          error: (erro) => {
            Swal.fire({
              title: 'Ocorreu um erro',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          },
        });
      }
    });
  }

  new() {
    this.acessorioEdit = new Acessorio('');
    this.modalRef = this.modalService.open(this.modalAcessorioDetalhe);
  }

  edit(acessorio: Acessorio) {
    this.acessorioEdit = Object.assign({}, acessorio);
    this.modalRef = this.modalService.open(this.modalAcessorioDetalhe);
  }

  retornoDetalhe(acessorio: Acessorio) {
    this.listAll();
    this.modalRef.close();
  }

  select(acessorio: Acessorio) {
    this.retorno.emit(acessorio);
  }
}
