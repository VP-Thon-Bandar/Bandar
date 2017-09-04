import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { BandsComponent } from './bands.component';
import { BandDetailComponent } from './band-detail/band-detail.component';

/*COMO ESTE ES EL MODULO DEL COMPONENTE FINAL, AQUI SI CARGAMOS EN LAS RUTAS EL COMPONENTE DIRECTO*/
const routes: Routes = [
  {
    path: '', /*ES UNA RUTA RELATIVA, VIENE DE 'url/nosotros' */
    component: BandsComponent
  }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BandsComponent,
    BandDetailComponent,
  ],
  exports: [
    BandsComponent
  ]
})
export class BandsModule { }
