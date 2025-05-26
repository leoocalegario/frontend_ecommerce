import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../models/carro';
import { CarroService } from '../../services/carros.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { CurrencyPipe } from '../../pipes/currency.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MdbCarouselModule, MdbFormsModule, FormsModule, RouterLink, CommonModule, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    pesquisa: string = "";
    lista: Carro[] = [];
    private searchSubject = new Subject<string>();

    carrosService = inject(CarroService);

    constructor() {
        this.listAll();
        
        // Configurar o debounce para a busca
        this.searchSubject.pipe(
            debounceTime(1), // Espera 1ms após o usuário parar de digitar
            distinctUntilChanged() // Só executa se o valor mudou
        ).subscribe(termo => {
            if (termo.trim() === '') {
                this.listAll();
            } else {
                this.findByModeloLike(termo);
            }
        });
    }

    pesquisar() {
        this.searchSubject.next(this.pesquisa);
    }

    listAll() {
        this.carrosService.listAll().subscribe({
            next: lista => {
                this.lista = lista;
            },
            error: erro => {
                console.error('Erro ao listar carros:', erro);
                alert('Ocorreu um erro ao carregar os carros.');
            }
        });
    }

    findByModeloLike(pesquisa: string) {
        this.carrosService.findByModeloLike(pesquisa).subscribe({
            next: lista => {
                this.lista = lista;
            },
            error: erro => {
                console.error('Erro na busca:', erro);
                alert('Ocorreu um erro durante a busca.');
            }
        });
    }
}
