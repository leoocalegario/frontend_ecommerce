import { Component, inject, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { UsersdetailsComponent } from '../usersdetails/usersdetails.component';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [CommonModule, RouterLink, MdbModalModule, UsersdetailsComponent],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.scss'
})
export class UserslistComponent {
  lista: User[] = [];
  userEdit: User = new User();
  modalRef!: MdbModalRef<any>;
  @ViewChild('modalUserDetalhe') modalUserDetalhe!: TemplateRef<any>;

  modalService = inject(MdbModalService);
  userService = inject(UserService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.userService.listAll().subscribe({
      next: (lista: User[]) => {
        this.lista = lista;
      },
      error: (erro: any) => {
        console.error(erro);
      }
    });
  }

  new() {
    this.userEdit = new User();
    this.modalRef = this.modalService.open(this.modalUserDetalhe);
  }

  edit(user: User) {
    this.userEdit = Object.assign({}, user);
    this.modalRef = this.modalService.open(this.modalUserDetalhe);
  }

  deleteById(user: User) {
    if (confirm('Deseja realmente excluir este usuário?')) {
      this.userService.deleteById(user.id).subscribe({
        next: () => {
          this.listAll();
        },
        error: (erro: any) => {
          console.error(erro);
        }
      });
    }
  }

  retornoDetalhe(user: User) {
    this.listAll();
    this.modalRef.close();
  }
} 