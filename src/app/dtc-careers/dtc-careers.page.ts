import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

import { DtcCareersService } from './dtc-careers.service';
import { DtcCareers } from './dtc-careers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dtc-careers',
  templateUrl: './dtc-careers.page.html',
  styleUrls: ['./dtc-careers.page.scss'],
})
export class DtcCareersPage implements OnInit {
  dtcCareers: DtcCareers;

  constructor(
    private dtcCareersService: DtcCareersService,
    private storage: Storage) { }
  
  ngOnInit() {
    this.getDtcCareers();  
  }

  getDtcCareers(){  
    this.storage.get("ACCESS_TOKEN").then((ACCESS_TOKEN) => {
      this.dtcCareersService.getDtcCareers(ACCESS_TOKEN)
      .subscribe(
        dtcCareers=> {this.dtcCareers = dtcCareers;}
        );
    });
  }

}
