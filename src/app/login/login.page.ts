import { Component, OnInit } from '@angular/core';

import { Router } from  '@angular/router';

import { LoginService } from './login.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  message : string;
  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.loginService.logout();
  }

  login(form){
    this.loginService.login(form.value)
      .subscribe(
        (res)=>{
          this.router.navigateByUrl('home');
        }, (error)=> {
          this.message = "correo o contraseña incorrecta" + error
        }
      );
  }
}
