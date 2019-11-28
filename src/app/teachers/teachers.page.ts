import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';

import { CareersService } from '../careers/careers.service';
import { Careers } from '../careers/careers';
import { TeachersService } from './teachers.service';
import { Teachers } from './teachers';
import { ModalPage} from '../modal/modal.page';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
})
export class TeachersPage implements OnInit {
  careers: Careers;
  teachers: any;
  constructor(
    private careersService: CareersService,
    private teachersService: TeachersService,
    private storage: Storage,
    public modalController: ModalController,
    ) { }
    
    ngOnInit() {
      this.get_teachers();
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

    async presentModal(teacher: Teachers) {
      const modal = await this.modalController.create({
        component: ModalPage,
        cssClass: 'my-custom-modal-css',
        componentProps: {
          'teacher': teacher,
        }
      });
      return await modal.present();
    }
  }
  