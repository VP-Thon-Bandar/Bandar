import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

import { BandarShellComponent } from './bandar-shell/bandar-shell.component';
import { TopBarComponent } from './bandar-shell/top-bar/top-bar.component';
import { MainContentComponent } from './bandar-shell/main-content/main-content.component';
import { FooterComponent } from './bandar-shell/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    BandarShellComponent
  ],
  declarations: [BandarShellComponent, TopBarComponent, MainContentComponent, FooterComponent],
  providers: [
  ]
})
export class CoreModule { }
