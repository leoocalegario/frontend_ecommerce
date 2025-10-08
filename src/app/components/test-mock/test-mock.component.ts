import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Carro } from '../models/carro';
import { getCarrosDetalhados } from '../mock-data/carros-detalhados-mock';

@Component({
  selector: 'app-test-mock',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container mt-4">
      <h2>Teste dos Dados Mock</h2>
      <div class="row">
        <div *ngFor="let carro of carros" class="col-md-6 col-lg-3 mb-4">
          <div class="card">
            <img [src]="carro.imagem" class="card-img-top" [alt]="carro.modelo" style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">{{carro.veiculosmarca.marca}} {{carro.modelo}}</h5>
              <p class="card-text">
                <strong>Ano:</strong> {{carro.ano}}<br>
                <strong>Cor:</strong> {{carro.cor}}<br>
                <strong>KM:</strong> {{carro.km | number}}<br>
                <strong>Combustível:</strong> {{carro.combustivel}}<br>
                <strong>Placa:</strong> {{carro.placacarro}}
              </p>
              <div class="card-footer">
                <strong class="text-success">R$ {{carro.valorcarro | number:'1.2-2'}}</strong>
                <br><br>
                <a routerLink="/carros/view/{{carro.id_anuncio}}" class="btn btn-primary btn-sm">
                  Ver Detalhes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      height: 100%;
    }
    .card-img-top {
      width: 100%;
    }
  `]
})
export class TestMockComponent implements OnInit {
  carros: Carro[] = [];

  ngOnInit() {
    this.carros = getCarrosDetalhados();
    console.log('Dados mock carregados:', this.carros);
  }
}
