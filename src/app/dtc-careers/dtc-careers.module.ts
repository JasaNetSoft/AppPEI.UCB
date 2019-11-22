import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DtcCareersPageRoutingModule } from './dtc-careers-routing.module';

import { DtcCareersPage } from './dtc-careers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DtcCareersPageRoutingModule
  ],
  declarations: [DtcCareersPage]
})
export class DtcCareersPageModule {}
