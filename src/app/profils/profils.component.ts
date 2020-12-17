import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../Service/profil.service';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent implements OnInit {
  displayedColumns: any;

  constructor( private profilService: ProfilService) { }

  ngOnInit(): void {
    this.profilService.getProfils().subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
