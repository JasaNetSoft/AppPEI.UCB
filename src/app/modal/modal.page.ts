import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Activities } from '../activities/activities';
import { DtcCareers } from '../dtc-careers/dtc-careers';
import { Teachers } from '../teachers/teachers';
import { Tracing } from '../tracing/tracing';
import { stringify } from 'querystring';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() activitie: Activities;
  @Input() dtcCareer: DtcCareers;
  @Input() teacher: Teachers;
  @Input() tracing: Tracing;
  @Input() activities_user: any;
  @Input() users: any;
  
  constructor(
    public modalController: ModalController,
  ){}

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
