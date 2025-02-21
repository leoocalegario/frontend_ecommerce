import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../../auth/login';
import { LoginService } from '../../../auth/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: Login = new Login();

  loginService = inject(LoginService);

  router = inject(Router);

  logar() {
    this.loginService.logar(this.login).subscribe({
      next: token =>{
        console.log(token);
        if(token)
          this.loginService.addToken(token);
        this.router.navigate(['home'])
      },
      error: erro =>{
        alert('Usuario ou Senha invalidos.');
        console.error(erro);
      }
    });
  }
}
