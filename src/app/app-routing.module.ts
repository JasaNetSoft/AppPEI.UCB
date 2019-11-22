import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dtc-careers',
    loadChildren: () => import('./dtc-careers/dtc-careers.module').then( m => m.DtcCareersPageModule)
  },
  {
    path: 'careers',
    loadChildren: () => import('./careers/careers.module').then( m => m.CareersPageModule)
  },
  {
    path: 'teachers',
    loadChildren: () => import('./teachers/teachers.module').then( m => m.TeachersPageModule)
  },
  {
    path: 'indicators',
    loadChildren: () => import('./indicators/indicators.module').then( m => m.IndicatorsPageModule)
  },
  {
    path: 'tracing',
    loadChildren: () => import('./tracing/tracing.module').then( m => m.TracingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
