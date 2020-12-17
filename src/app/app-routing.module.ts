import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AdminComponent} from './admin/admin.component';
import {UsersComponent} from './users/users.component';
import {ProfilsComponent} from './profils/profils.component';

const routes: Routes = [
  { path: '' , redirectTo: '/accueil' , pathMatch: 'full'},
  { path: 'accueil' , component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profils', component: ProfilsComponent },
  { path: 'admin' , component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
