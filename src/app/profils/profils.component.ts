import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../Service/profil.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreatprofilsComponent} from '../creatprofils/creatprofils.component';
import {CreatprofilsService} from '../Service/creatprofils.service';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'libelle', 'update', 'delete'];
  profils: any = [];

  constructor( private profilService: ProfilService, private dialog: MatDialog,
               private profilsService: CreatprofilsService) { }

  ngOnInit(): void {
   this.getProfil();
  }
  // tslint:disable-next-line:typedef
  getProfil(){
    this.profilService.getProfils().subscribe(
      data => {
        // @ts-ignore
        this.profils = data;
        console.log(data);
      }
    );
  }
  public redirectToUpdate = (id: string) => {

  }
  public redirectToDelete = (id: string) => {

  }
  // tslint:disable-next-line:typedef
  onCreate() {
    this.profilsService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CreatprofilsComponent, dialogConfig);
  }
}


