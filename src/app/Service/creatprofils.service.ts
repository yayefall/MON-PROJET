import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Profils} from '../models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatprofilsService {
  constructor(private http: HttpClient) {}
  form: FormGroup = new FormGroup({
    libelle: new FormControl('', Validators.required),
  });
  // tslint:disable-next-line:typedef
  initializeFormGroup() {
    this.form.setValue({
      libelle: '',
    });
  }
  // tslint:disable-next-line:typedef
  insertProfils(): any{
    return this.http.post(`${environment.apiUrl}/admin/profils`, this.form.value);
  }
}
