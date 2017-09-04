import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './../login/login.module#LoginModule'
  },
  {
    path: 'myband',
    loadChildren: './../my-band/my-band.module#MyBandModule'
  },
  {
    path: 'timeline',
    loadChildren: './../timeline/timeline.module#TimelineModule'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ] // re-export the module declarations
})
export class CoreRoutingModule { }
