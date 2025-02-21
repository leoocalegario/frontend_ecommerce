import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { LoginService } from '../../../auth/login.service';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MdbCollapseModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  loginService = inject (LoginService);

  reload(){
    location.reload();
  }

}
