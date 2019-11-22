import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams} from  '@angular/common/http';
import { Observable } from 'rxjs';

import { AUTH_SERVER_ADDRESS } from '../constants';
import { Teachers } from './teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private AUTH_SERVER_ADDRESS:  string  =  AUTH_SERVER_ADDRESS;
  constructor(
    private http: HttpClient,
  ) { }

  getTeachers(ACCESS_TOKEN: string,id: number[]): Observable<Teachers>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization',ACCESS_TOKEN);
    let id_careers: number[];
    id_careers[0] = 1;
    id_careers[1] = 5;

    return this.http
    .post<Teachers>(`${this.AUTH_SERVER_ADDRESS}/api/teachers`,{id_careers:1},{headers})
    .pipe();
  }
}
