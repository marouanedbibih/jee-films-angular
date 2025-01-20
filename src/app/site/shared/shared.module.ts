import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    NavmenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavmenuComponent
  ]
})
export class SharedModule { }
