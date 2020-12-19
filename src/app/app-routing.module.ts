import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AdminComponent} from './admin/admin.component';
import {UsersComponent} from './users/users.component';
import {ProfilsComponent} from './profils/profils.component';
import {PromotionComponent} from './promotion/promotion.component';
import {CreatprofilsComponent} from './creatprofils/creatprofils.component';

const routes: Routes = [
  { path: '' , redirectTo: '/login' , pathMatch: 'full'},
  { path: 'accueil' , component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profils', component: ProfilsComponent },
  { path: 'admin' , component: AdminComponent},
  { path: 'promotion' , component: PromotionComponent},
  { path: 'creatprofils' , component: CreatprofilsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
