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
  id_user: number;
  role_id: number;
  id: string;
  name: string;
  activities: any;
  activities_user: any;
  users: any;
  constructor(
    private route: ActivatedRoute,
    private activitiesService: ActivitiesService,
    private storage: Storage,
    public modalController: ModalController,
  ) { 
    this.storage.get("role_id").then((role_id)=>{
      this.role_id = role_id;
    }); 
    this.storage.get("id").then((id)=>{
      this.id_user = id;
    }); 
  }

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
          this.activities_user = data[1];
          this.users = data[2];
        });
    });
  }

  
  async presentModal(activitie: Activities) {
    console.log(JSON.stringify(this.activities_user)+"-------------------**********");
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'activitie': activitie,
        'activities_user': this.activities_user,
        'users': this.users
      }
    });
    return await modal.present();
  }
}
