import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegionViewComponent } from './region-view/region-view.component';
import { CountryModule } from './country/country.module';
import { SharedModule } from './shared/shared.module';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WorldInfoService } from './world-info.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';



@NgModule({
  declarations: [
    AppComponent,
    RegionViewComponent,


  ],
  imports: [
    BrowserModule,
    CountryModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'home',
        component: RegionViewComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '*',
        component: RegionViewComponent
      },
      {
        path: '**',
        component: RegionViewComponent
      }


    ])
  ],
  providers: [WorldInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
