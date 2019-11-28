import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable, of } from 'rxjs';

import { AUTH_SERVER_ADDRESS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private AUTH_SERVER_ADDRESS:  string  =  AUTH_SERVER_ADDRESS;
  constructor(
    private http: HttpClient,
  ) { }

  getActivitiesIndicator(ACCESS_TOKEN: string,id: string): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization',ACCESS_TOKEN);    
    
    return this.http
    .post<any>(`${this.AUTH_SERVER_ADDRESS}/api/activities_indicator`
                ,{"id": id}, {headers})
    .pipe();
  }
}
