import { Injectable } from '@angular/core';

import { AUTH_SERVER_ADDRESS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TracingService {
  private AUTH_SERVER_ADDRESS:  string  =  AUTH_SERVER_ADDRESS;
  constructor() { }
}
