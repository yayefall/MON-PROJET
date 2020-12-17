import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { JwtModule } from '@auth0/angular-jwt';
import {MatTableModule} from '@angular/material/table';



// @ts-ignore
// @ts-ignore
const MaterialModules = [
  MatFormFieldModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  FlexModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  JwtModule,
  MatTableModule

];

@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules]
})
export class MaterielModule { }
