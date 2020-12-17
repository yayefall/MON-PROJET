import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Profils, Users} from '../models';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor( private http: HttpClient) { }

  getProfils(): Observable<Profils[]> {
    return this.http.get<Profils[]>(`${environment.apiUrl}/admin/profils`);
  }
}
