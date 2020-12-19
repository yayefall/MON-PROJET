import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../Service/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // @ts-ignore
  listData: MatTableDataSource<any>;
  displayedColumns: any = ['id', 'username', 'email', 'nom', 'prenom',
    'profil', 'telephone', 'genre', 'update', 'delete'];
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
users: any = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }
// tslint:disable-next-line:typedef
getUser() {
  this.userService.getUsers().subscribe(
    data => {
      // @ts-ignore
      this.users = data;
      console.log(data);
    },
    error => {
    }
  );
}
  public redirectToDetails = (id: string) => {

  }
  public redirectToUpdate = (id: string) => {

  }
  public redirectToDelete = (id: string) => {

  }

}
