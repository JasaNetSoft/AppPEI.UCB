import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: '',
            redirectTo: '',
            pathMatch: 'full'
          },
          {
            path: 'directores',
            children: [
              {
                path: '',
                loadChildren: '../dtc-careers/dtc-careers.module#DtcCareersPageModule'
              }
            ],
          },
          {
            path: 'carreras',
            children: [
              {
                path: '',
                loadChildren: '../careers/careers.module#CareersPageModule'
              }
            ],
          },
          {
            path: 'docentes',
            children: [
              {
                path: '',
                loadChildren: '../teachers/teachers.module#TeachersPageModule'
              }
            ],
          },
          {
            path: 'indicadores',
            children: [
              {
                path: '',
                loadChildren: '../indicators/indicators.module#IndicatorsPageModule'
              }
            ],
          },
          {
            path: 'seguimientos',
            children: [
              {
                path: '',
                loadChildren: '../tracing/tracing.module#TracingPageModule'
              }
            ],
          },
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
