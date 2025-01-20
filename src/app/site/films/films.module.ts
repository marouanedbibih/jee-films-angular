import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { SearchformComponent } from './searchform/searchform.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { SearchmovieService } from './services/searchmovie.service';
import { ListDirective } from './directives/list.directive';



@NgModule({
  declarations: [
    FilmsComponent,
    SearchformComponent,
    ListDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FormBuilder,
    SearchmovieService
  ],
})
export class FilmsModule { }
