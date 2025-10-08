import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Login } from '../../../auth/login';
import { LoginService } from '../../../auth/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: Login = new Login();

  loginService = inject(LoginService);

  router = inject(Router);

  logar() {
    // Mock de login - aceita qualquer usuário/senha para teste
    if (this.login.username && this.login.password) {
      // Simula um token JWT mock
      const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      
      this.loginService.addToken(mockToken);
      console.log('Login mock realizado com sucesso');
      this.router.navigate(['home']);
    } else {
      alert('Por favor, preencha usuário e senha');
    }
  }
}
