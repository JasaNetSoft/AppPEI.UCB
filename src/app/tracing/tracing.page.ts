import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';

import { Careers } from '../careers/careers';
import { TeachersService } from '../teachers/teachers.service';
import { Teachers } from '../teachers/teachers';
import { Tracing } from './tracing';
import { TracingService } from './tracing.service';
import { ModalPage} from '../modal/modal.page';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.page.html',
  styleUrls: ['./tracing.page.scss'],
})
export class TracingPage implements OnInit {
  id: number;
  name: string;
  careers: Careers;
  teachers: any;
  selectedValue: number;
  tracings: any;
  activities_user: any;
  users: any;

  constructor(
    private tracingService: TracingService,
    private teachersService: TeachersService,
    private storage: Storage,
    public modalController: ModalController,
  ) {}

  ngOnInit() {
    this.get_teachers();
    this.getDataUser();
  }

  getDataUser(){
    this.storage.get("id").then((id) => {
      this.id = id;
    });
    this.storage.get("name").then((name) => {
      this.name = name;
    });    
  }
  get_teachers(){
    this.storage.get("ACCESS_TOKEN").then((ACCESS_TOKEN)=>{
      this.storage.get("id").then((id) => {
        this.teachersService.getTeachers(ACCESS_TOKEN,id)
          .subscribe((teachers)=>{
            this.teachers = teachers;
            let tamanio = this.teachers.length;
            for(let j = 0; j < tamanio; j++){
              for(let k = j+1; k < tamanio-1; k++){
                if(this.teachers[j].id==this.teachers[k].id){
                  this.teachers.splice(k,1);
                }
              }
            }
          }
        );
      });
    });
  }

  onChange(event){
    this.selectedValue = event.target.value;
    this.storage.get("ACCESS_TOKEN").then((ACCESS_TOKEN) => {
      this.tracingService.getActivitiesDTC(ACCESS_TOKEN,this.selectedValue)
        .subscribe((data)=>{
          this.tracings = data[0];
          this.activities_user = data[1];
          this.users = data[2];
          if(this.tracings.length == 0){
            this.tracings = null
          }
        })
    });
  }

  async presentModal(tracing: Tracing) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'tracing': tracing,
        'activities_user': this.activities_user,
        'users': this.users
      }
    });
    return await modal.present();
  }

}
