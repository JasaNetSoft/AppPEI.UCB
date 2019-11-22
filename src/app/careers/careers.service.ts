import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Careers } from './careers';
import { AUTH_SERVER_ADDRESS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CareersService {
  private AUTH_SERVER_ADDRESS:  string  =  AUTH_SERVER_ADDRESS;

  constructor(
    private http: HttpClient,) {}


  getCareers(ACCESS_TOKEN: string): Observable<Careers>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization',ACCESS_TOKEN);    
    
    return this.http
    .get<Careers>(`${this.AUTH_SERVER_ADDRESS}/api/careers`, {headers})
    .pipe();
  }

  getCareersUser(ACCESS_TOKEN: string,id: number): Observable<Careers>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization',ACCESS_TOKEN); 

    return this.http
    .post<Careers>(`${this.AUTH_SERVER_ADDRESS}/api/get_careers`
                    ,{"id": id},{headers})
    .pipe();
  }
}
