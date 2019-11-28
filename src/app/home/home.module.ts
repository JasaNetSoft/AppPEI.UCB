import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DtcCareersPage } from '../dtc-careers/dtc-careers.page';
import { CareersPage } from '../careers/careers.page';
import { TeachersPage } from '../teachers/teachers.page';
import { IndicatorsPage } from '../indicators/indicators.page';
import { TracingPage } from '../tracing/tracing.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full'},
      { path: 'directores', component: DtcCareersPage },
      { path: 'carreras', component: CareersPage },
      { path: 'docentes', component: TeachersPage },
      { path: 'indicadores', component: IndicatorsPage },
      { path: 'seguimientos', component: TracingPage},
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DtcCareersPage,
    CareersPage,
    TeachersPage,
    IndicatorsPage,
    TracingPage, 
    HomePage]
})
export class HomePageModule {}
