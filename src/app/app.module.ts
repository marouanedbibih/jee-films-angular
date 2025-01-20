import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './site/home/home.module';
import { AboutModule } from './site/about/about.module';
import { FilmsModule } from './site/films/films.module';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './site/page-not-found/page-not-found.component';
import { SharedModule } from './site/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    AboutModule,
    FilmsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
