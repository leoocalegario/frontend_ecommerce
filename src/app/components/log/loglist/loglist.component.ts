import { Component } from '@angular/core';

@Component({
  selector: 'app-loglist',
  standalone: true,
  imports: [],
  templateUrl: './loglist.component.html',
  styleUrl: './loglist.component.scss'
})
export class LoglistComponent {
  
  listAll() {
    this.logService.listAll().subscribe({
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
