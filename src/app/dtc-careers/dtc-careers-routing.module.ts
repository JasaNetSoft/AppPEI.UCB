import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DtcCareersPage } from './dtc-careers.page';

const routes: Routes = [
  {
    path: '',
    component: DtcCareersPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DtcCareersPageRoutingModule {}
