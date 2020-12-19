import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProfilsComponent } from './profils/profils.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterielModule} from './materiel/materiel.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import { PromotionComponent } from './promotion/promotion.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CreatprofilsComponent } from './creatprofils/creatprofils.component';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import {config} from 'rxjs';
import {AngularFireModule} from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    ProfilsComponent,
    AccueilComponent,
    AdminComponent,
    PromotionComponent,
    CreatprofilsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterielModule,
        ReactiveFormsModule,
        FlexModule,
        FormsModule,
        HttpClientModule,
        MatPaginatorModule,

      /*AngularFireDatabaseModule,
      AngularFireModule.initializeApp(config)*/
    ],
  providers: [AngularFireDatabase,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  //entryComponents: [CreatprofilsComponent]
})
export class AppModule {
}
