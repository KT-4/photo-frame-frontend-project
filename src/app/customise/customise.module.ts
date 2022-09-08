import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomiseRoutingModule } from './customise-routing.module';
import { AcrylicPrintComponent } from './acrylic-print/acrylic-print.component';
import { LayoutModule } from '../layout/layout.module';
import { AcrylincWallPhotoDesignComponent } from './acrylinc-wall-photo-design/acrylinc-wall-photo-design.component';
import { BestAcrylicPhotoComponent } from './best-acrylic-photo/best-acrylic-photo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DesignAcrylicNamePlateComponent } from './design-acrylic-name-plate/design-acrylic-name-plate.component';

@NgModule({
  declarations: [
    AcrylicPrintComponent,
    AcrylincWallPhotoDesignComponent,
    BestAcrylicPhotoComponent,
    DesignAcrylicNamePlateComponent
  ],
  imports: [
    CommonModule,
    CustomiseRoutingModule,
    LayoutModule,
    NgxPaginationModule
  ]
})
export class CustomiseModule { }
