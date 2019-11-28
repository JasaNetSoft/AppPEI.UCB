import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';

import { DtcCareersService } from './dtc-careers.service';
import { DtcCareers } from './dtc-careers';
import { ModalPage} from '../modal/modal.page';


@Component({
  selector: 'app-dtc-careers',
  templateUrl: './dtc-careers.page.html',
  styleUrls: ['./dtc-careers.page.scss'],
})
export class DtcCareersPage implements OnInit {
  dtcCareers: any;

  constructor(
    private dtcCareersService: DtcCareersService,
    private storage: Storage,
    public modalController: ModalController,
  ) { }
  
  ngOnInit() {
    this.getDtcCareers();  
  }

  getDtcCareers(){  
    this.storage.get("ACCESS_TOKEN").then((ACCESS_TOKEN) => {
      this.dtcCareersService.getDtcCareers(ACCESS_TOKEN)
      .subscribe(dtcCareers=> {
        this.dtcCareers = dtcCareers;
        let tamanio = this.dtcCareers.length;
        for(let j = 0; j < tamanio; j++){
          for(let k = j+1; k < tamanio-1; k++){
            if(this.dtcCareers[j].id==this.dtcCareers[k].id){
              this.dtcCareers.splice(k,1);
            }
          }
        }
      });
    });
  }

  async presentModal(dtcCareer: DtcCareers) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'dtcCareer': dtcCareer,
      }
    });
    return await modal.present();
  }
}
