import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable, of } from 'rxjs';

import { AUTH_SERVER_ADDRESS } from '../constants';
import { Notification } from './notification'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private AUTH_SERVER_ADDRESS:  string  =  AUTH_SERVER_ADDRESS;

  constructor(
    private http: HttpClient,
  ) { }

  getUserNotifications(ACCESS_TOKEN: string, id: number): Observable<Notification>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization',ACCESS_TOKEN);    
    
    return this.http
    .post<Notification>(`${this.AUTH_SERVER_ADDRESS}/api/notifications_user`,{id: id}, {headers})
    .pipe();
  }
}
