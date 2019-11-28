import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


import { Indicators } from '../indicators/indicators';
import { ActivitiesService } from './activities.service';
import { Activities } from './activities';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  id: string;
  name: string;
  activities: any;
  constructor(
    private route: ActivatedRoute,
    private activitiesService: ActivitiesService,
    private storage: Storage,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
      this.name = params["name"];
    });
    this.getActivities();
  }

  getActivities(){
    this.storage.get("ACCESS_TOKEN").then((ACCESS_TOKEN)=>{
      this.activitiesService.getActivitiesIndicator(ACCESS_TOKEN,this.id)
        .subscribe((data)=>{
          this.activities = data[0];
          
        });
    });
  }

  
  async presentModal(activitie: Activities) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'activitie': activitie,
      }
    });
    return await modal.present();
  }
}
