import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CarrosdetailsComponent } from '../carrosdetails/carrosdetails.component';
import Swal from 'sweetalert2';
import { Carro } from '../../../models/carro';
import { CarroService } from '../../../services/carros.service';

@Component({
  selector: 'app-carrosvendas',
  standalone: true,
  imports: [RouterLink, MdbModalModule, CarrosdetailsComponent],
  templateUrl: './carrosvendas.component.html',
  styleUrl: './carrosvendas.component.scss'
})
export class CarrosvendasComponent {
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
}
