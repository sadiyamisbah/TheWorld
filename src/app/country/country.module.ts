import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCountryViewComponent } from './all-country-view/all-country-view.component';
import { SingleCountryViewComponent } from './single-country-view/single-country-view.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../sort.pipe';
import { AlphabetSortPipe } from '../alphabet-sort.pipe';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    
    RouterModule.forChild([ 
      { 
        path: 'allCountry/:entityName/:entityValue', 
        component: AllCountryViewComponent,
     },
     { 
      path: 'Country/:code', 
      component: SingleCountryViewComponent,
   },

    ]),
  ],
  declarations: [AllCountryViewComponent, SingleCountryViewComponent, SortPipe,AlphabetSortPipe]
})
export class CountryModule { }
