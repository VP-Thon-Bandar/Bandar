import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { CoreModule } from './core/core.module';
import { BandarShellComponent } from './core/bandar-shell/bandar-shell.component';

import { OcultarDirective } from './shared/directives/ocultar.directive';

@NgModule({
  declarations: [
    OcultarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [BandarShellComponent] /*component to index.html*/
})
export class AppModule { } 
