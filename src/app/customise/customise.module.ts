import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomiseRoutingModule } from './customise-routing.module';
import { AcrylicPrintComponent } from './acrylic-print/acrylic-print.component';
import { LayoutModule } from '../layout/layout.module';
import { AcrylincWallPhotoDesignComponent } from './acrylinc-wall-photo-design/acrylinc-wall-photo-design.component';
import { BestAcrylicPhotoComponent } from './best-acrylic-photo/best-acrylic-photo.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AcrylicPrintComponent,
    AcrylincWallPhotoDesignComponent,
    BestAcrylicPhotoComponent
  ],
  imports: [
    CommonModule,
    CustomiseRoutingModule,
    LayoutModule,
    NgxPaginationModule
  ]
})
export class CustomiseModule { }
