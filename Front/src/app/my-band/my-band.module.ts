import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { MyBandComponent } from './my-band.component';

const routes: Routes = [
  {
    path: '',
    component: MyBandComponent
  }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MyBandComponent
  ],
  exports: [
    MyBandComponent
  ]
})
export class MyBandModule { }
