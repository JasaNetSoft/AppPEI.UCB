import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

import { CareersService } from '../careers/careers.service';
import { Careers } from '../careers/careers';

import { Indicators } from './indicators';
import { IndicatorsService } from './indicators.service';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.page.html',
  styleUrls: ['./indicators.page.scss'],
})
export class IndicatorsPage implements OnInit {
  careers: Careers;
  indicators: Indicators;
  selectedValue: number;
  constructor(
    private careersService:CareersService,
    private indicatorsService: IndicatorsService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.getCareersUser();
  }

  getCareersUser(){
    this.storage.get("ACCESS_TOKEN").then((ACCESS_TOKEN) => {
      this.storage.get("id").then((id) => {
        this.careersService.getCareersUser(ACCESS_TOKEN,id)
        .subscribe(careers=> {
          this.careers = careers;
        });
      });
    });
  }

  onChange(event){
    this.selectedValue = event.target.value;
    this.storage.get("ACCESS_TOKEN").then((ACCESS_TOKEN) => {
      this.indicatorsService.getIndicators(ACCESS_TOKEN,this.selectedValue)
      .subscribe(indicators=> {
        this.indicators = indicators;
      });
    });
  }
}
