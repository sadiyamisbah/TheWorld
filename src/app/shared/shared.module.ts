import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderViewComponent } from './header-view/header-view.component';
import { ImageDesignComponent } from './image-design/image-design.component';
import { GridDesignComponent } from './grid-design/grid-design.component';
import { RouterModule, Routes } from '@angular/router';
import { RegionViewComponent } from '../region-view/region-view.component';
import {NgObjectPipesModule} from 'ngx-pipes';
@NgModule({
  imports: [
    CommonModule,
    NgObjectPipesModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: RegionViewComponent,
        pathMatch: 'full'
      },
    ])
  ],
  exports: [
   HeaderViewComponent,
   ImageDesignComponent,
   GridDesignComponent,
   CommonModule


  ],
  declarations: [HeaderViewComponent, ImageDesignComponent, GridDesignComponent]
})
export class SharedModule { }
