import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

import { CareersService } from './careers.service';
import { Careers } from './careers';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.page.html',
  styleUrls: ['./careers.page.scss'],
})
export class CareersPage implements OnInit {
  careers: Careers;
  id: number;
  constructor(
    private careersService:CareersService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.getCareers();
  }

  getCareers(){
    this.storage.get("ACCESS_TOKEN").then((ACCESS_TOKEN) => {
      this.careersService.getCareers(ACCESS_TOKEN)
      .subscribe(careers=> {this.careers = careers;} );
    });
  }

}
