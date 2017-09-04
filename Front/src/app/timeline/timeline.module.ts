import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { TimelineComponent } from './timeline.component';
import { TimelineService } from './shared/timeline.service';

const routes: Routes = [
  {
    path: '',
    component: TimelineComponent
  }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TimelineComponent
  ],
  exports: [
    TimelineComponent
  ],
  providers: [
    TimelineService
  ]
})
export class TimelineModule {}