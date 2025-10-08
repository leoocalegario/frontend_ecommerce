import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-usersdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usersdetails.component.html',
  styleUrl: './usersdetails.component.scss'
})
export class UsersdetailsComponent {
  @Input() user: User = new User();
  @Output("retorno") retorno = new EventEmitter<User>();

  userService = inject(UserService);

  save() {
    if (this.user.id) {
      this.userService.update(this.user).subscribe({
        next: (user: User) => {
          this.retorno.emit(user);
        },
        error: (erro: any) => {
          console.error(erro);
        }
      });
    } else {
      this.userService.save(this.user).subscribe({
        next: (user: User) => {
          this.retorno.emit(user);
        },
        error: (erro: any) => {
          console.error(erro);
        }
      });
    }
  }
} 