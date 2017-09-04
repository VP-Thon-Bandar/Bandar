import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

import { LoginService} from './shared/login.service'

/*COMO ESTE ES EL MODULO DEL COMPONENTE FINAL, AQUI SI CARGAMOS EN LAS RUTAS EL COMPONENTE DIRECTO*/
const routes: Routes = [
  {
    path: '', /*ES UNA RUTA RELATIVA, VIENE DE 'url/nosotros' */
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ],
})
export class LoginModule { }
