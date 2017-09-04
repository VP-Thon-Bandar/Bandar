import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { MyBandComponent } from './my-band.component';
import { MyBandService } from './shared/my-band.service';

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
  ],
  providers: [
    MyBandService
  ]
})
export class MyBandModule { }
