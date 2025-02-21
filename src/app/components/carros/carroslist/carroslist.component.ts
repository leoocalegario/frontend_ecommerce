import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { CarrosdetailsComponent } from '../carrosdetails/carrosdetails.component';
import { Marca } from '../../../models/marca';
import { CarroService } from '../../../services/carros.service';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [RouterLink, MdbModalModule, CarrosdetailsComponent],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss',
})
export class CarroslistComponent {
  lista: Carro[] = [];
  carroEdit: Carro = new Carro();

  modalService = inject(MdbModalService);
  @ViewChild('modalCarroDetalhe') modalCarroDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  carroService = inject(CarroService);

  constructor() {
    this.listAll();

    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado;

    if (carroNovo != null) {
      carroNovo.id = 555;
      this.lista.push(carroNovo);
    }

    if (carroEditado != null) {
      let indice = this.lista.findIndex((x) => {
        return x.idAnuncio == carroEditado.idAnuncio;
      });
      this.lista[indice] = carroEditado;
    }
  }

  listAll() {
    this.carroService.listAll().subscribe({
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

  deleteById(carro: Carro) {
    Swal.fire({
      title: 'Tem certeza que deseja deletar este registro?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        this.carroService.delete(carro.idAnuncio).subscribe({
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
    this.carroEdit = new Carro();
    this.modalRef = this.modalService.open(this.modalCarroDetalhe);
  }

  edit(carro: Carro) {
    this.carroEdit = Object.assign({}, carro);
    this.modalRef = this.modalService.open(this.modalCarroDetalhe);
  }

  retornoDetalhe(carro: Carro) {
    this.listAll();
    this.modalRef.close();
  }
}
