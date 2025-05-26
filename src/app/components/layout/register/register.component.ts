import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Register } from '../../../auth/register';
import { LoginService } from '../../../auth/login.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  register: Register = new Register();
  errorMessage: string = '';

  loginService = inject(LoginService);
  router = inject(Router);

  registrar() {
    if (this.register.password !== this.register.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem';
      return;
    }

    this.loginService.registrar(this.register).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (erro) => {
        this.errorMessage = 'Erro ao realizar cadastro. Tente novamente.';
        console.error(erro);
      }
    });
  }
} 