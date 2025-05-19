import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LoginComponent } from './components/layout/login/login.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './components/carros/carrosdetails/carrosdetails.component';
import { MarcaslistComponent } from './components/marcas/marcaslist/marcaslist.component';
import { MarcasdetailsComponent } from './components/marcas/marcasdetails/marcasdetails.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { AcessorioslistComponent } from './components/acessorios/acessorioslist/acessorioslist.component';
import { AcessoriosdetailsComponent } from './components/acessorios/acessoriosdetails/acessoriosdetails.component';
import { CarrosviewComponent } from './components/carros/carrosview/carrosview.component';
import { CarrosvendasComponent } from './components/carros/carrosvendas/carrosvendas.component';
import { loginGuard } from './auth/login.guard';
import { PropostalistComponent } from './components/proposta/propostalist/propostalist.component';
import { PropostadetailsComponent } from './components/proposta/propostadetails/propostadetails.component';
import { UserslistComponent } from './components/users/userslist/userslist.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: PrincipalComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'carros/view/:id', component: CarrosviewComponent },
      { path: 'vendas', component: CarrosvendasComponent },
      { path: 'contato', component: ContatoComponent },
    ],
  },
  
  {
    path: 'admin',
    component: PrincipalComponent,
    canActivate:[loginGuard],
    children: [
      { path: 'carros', component: CarroslistComponent },
      { path: 'carros/new', component: CarrosdetailsComponent },
      { path: 'carros/edit/:id', component: CarrosdetailsComponent },
      { path: 'marcas', component: MarcaslistComponent },
      { path: 'marcas/new', component: MarcasdetailsComponent },
      { path: 'marcas/edit/:id', component: MarcasdetailsComponent },
      { path: 'acessorios', component: AcessorioslistComponent },
      { path: 'acessorios/new', component: AcessoriosdetailsComponent },
      { path: 'acessorios/edit/:id', component: AcessoriosdetailsComponent },
      { path: 'propostas', component: PropostalistComponent},
      { path: 'propostas/view', component: PropostadetailsComponent},
      { path: 'users', component: UserslistComponent}
    ],
  },
];
