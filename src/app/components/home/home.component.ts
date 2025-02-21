import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../models/carro';
import { CarroService } from '../../services/carros.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MdbCarouselModule, MdbFormsModule, FormsModule, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    pesquisa: string ="";
    lista: Carro[] = [];

    carrosService = inject(CarroService);

  constructor(){
    this.listAll();
  }

    pesquisar(){
      this.findByModeloLike(this.pesquisa);
    }


    listAll(){
      this.carrosService.listAll().subscribe({
        next: lista => {
          this.lista = lista;
        },
        error: erro =>{
          alert('deu erro');
        }
      });
    }

    findByModeloLike(pesquisa: string){
      console.log(pesquisa);
      this.carrosService.findByModeloLike(pesquisa).subscribe({
        next: lista => {
          console.log(lista);
          this.lista = lista;
        },
        error: erro =>{
          alert('Ocorreu um erro imprevisto.');
        }
      });
    }

    
}
