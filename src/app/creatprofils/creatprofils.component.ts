import { Component, OnInit } from '@angular/core';
import {CreatprofilsService} from '../Service/creatprofils.service';
import {MatDialogRef} from '@angular/material/dialog';

// @ts-ignore
@Component({
  selector: 'app-creatprofils',
  templateUrl: './creatprofils.component.html',
  styleUrls: ['./creatprofils.component.scss']
})
export class CreatprofilsComponent implements OnInit {

  constructor( public profilsService: CreatprofilsService,
               public dialogRef: MatDialogRef<CreatprofilsComponent>
               ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onClear() {
    this.profilsService.initializeFormGroup();
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.profilsService.insertProfils().subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }
  // tslint:disable-next-line:typedef
  onClose() {
    this.profilsService.form.reset();
    this.profilsService.initializeFormGroup();
    this.dialogRef.close();
  }
}
