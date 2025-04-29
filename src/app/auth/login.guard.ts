import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from './login.service';

export const loginGuard: CanActivateFn = (route, state) => {

  let loginService = inject(LoginService);

  console.log(loginService.hasPermission('admin'));
  console.log( state.url.includes('/admin'));

  if(!loginService.hasPermission('admin') && state.url.includes('/admin')){
    alert('Você não tem permissão para acessar essa página');
    return false;
  }

  return true;
};
