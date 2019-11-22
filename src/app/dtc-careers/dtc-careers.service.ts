import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DtcCareers } from './dtc-careers';
import { AUTH_SERVER_ADDRESS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class DtcCareersService {
  private AUTH_SERVER_ADDRESS:  string  =  AUTH_SERVER_ADDRESS;

  constructor(
    private http: HttpClient,) {
  }
  
  getDtcCareers(ACCESS_TOKEN: string): Observable<DtcCareers>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization',ACCESS_TOKEN);    
    
    return this.http
    .get<DtcCareers>(`${this.AUTH_SERVER_ADDRESS}/api/dtc_careers`, {headers})
    .pipe();
  }
  
}
