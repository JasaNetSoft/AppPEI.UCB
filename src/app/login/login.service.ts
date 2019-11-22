import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { tap } from  'rxjs/operators';

import { User } from './user';
import { UserResponse } from './user-response';
import { AUTH_SERVER_ADDRESS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private AUTH_SERVER_ADDRESS:  string  =  AUTH_SERVER_ADDRESS;

  constructor(
    private http: HttpClient,
    private  storage:  Storage) { }

  logout(){
    this.storage.clear();
  }
  
  login(user: User): Observable<UserResponse>{
    return this.http
    .post<UserResponse>(`${this.AUTH_SERVER_ADDRESS}/api/login`,user).pipe(
      tap((res: UserResponse) => {
        if (res) {
          this.storage.set("id", res.id);           
          this.storage.set("name", res.name);
          this.storage.set("role_id", res.role_id);
          this.storage.set("ACCESS_TOKEN", res.ACCESS_TOKEN);
          this.storage.set("EXPIRES_IN", res.EXPIRES_IN);
        }
      })
    );
  }
}
