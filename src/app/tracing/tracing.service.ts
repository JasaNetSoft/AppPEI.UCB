import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { Observable } from 'rxjs';

import { AUTH_SERVER_ADDRESS } from '../constants';
import { Tracing } from './tracing';

@Injectable({
  providedIn: 'root'
})
export class TracingService {
  private AUTH_SERVER_ADDRESS:  string  =  AUTH_SERVER_ADDRESS;
  constructor(
    private http: HttpClient,
  ) { }

  getActivitiesDTC(ACCESS_TOKEN: string, id: number): Observable<Tracing>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization',ACCESS_TOKEN); 

    return this.http
    .post<Tracing>(`${this.AUTH_SERVER_ADDRESS}/api/activities`
                    ,{"id": id},{headers})
    .pipe();          
  }
}
