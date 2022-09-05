import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { WallPhotoComponent } from './wall-photo/wall-photo.component';
import { LayoutModule } from '../layout/layout.module';
import { LedBackliftComponent } from './led-backlift/led-backlift.component';



@NgModule({
  declarations: [
    WallPhotoComponent,
    LedBackliftComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    LayoutModule
  ]
})
export class ProductModule { }
