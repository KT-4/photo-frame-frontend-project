import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomiseRoutingModule } from './customise-routing.module';
import { AcrylicPrintComponent } from './acrylic-print/acrylic-print.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    AcrylicPrintComponent
  ],
  imports: [
    CommonModule,
    CustomiseRoutingModule,
    LayoutModule
  ]
})
export class CustomiseModule { }
