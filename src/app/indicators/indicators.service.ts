import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Indicators } from './indicators';
import { AUTH_SERVER_ADDRESS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {
  private AUTH_SERVER_ADDRESS:  string  =  AUTH_SERVER_ADDRESS;

  constructor(
    private http: HttpClient,
  ) {}

  getIndicators(ACCESS_TOKEN: string, id_career: number): Observable<Indicators>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization',ACCESS_TOKEN);    
    
    return this.http
    .post<Indicators>(`${this.AUTH_SERVER_ADDRESS}/api/indicators`
                      ,{id: id_career}, {headers})
    .pipe();
  }
}
