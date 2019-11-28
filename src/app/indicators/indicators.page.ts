import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

import { CareersService } from '../careers/careers.service';
import { Careers } from '../careers/careers';

import { Indicators } from './indicators';
import { IndicatorsService } from './indicators.service';

import { ActivitiesPage } from '../activities/activities.page';

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
    private storage: Storage,
    public navCtrl: NavController
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
      this.storage.get("role_id").then((role_id) => {
        this.storage.get("id").then((id) => {
          this.indicatorsService.getIndicators(ACCESS_TOKEN,this.selectedValue,role_id,id)
          .subscribe(indicators=> {
            this.indicators = indicators;
          });
        });
      });
    });
  }

  goTo(id:number,name: string){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: id,
          name: name,
          indicators: this.indicators
      }
    };
    this.navCtrl.navigateForward(['activities'], navigationExtras);
  }
}
