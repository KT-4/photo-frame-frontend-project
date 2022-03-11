import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    FormsModule
    
  ]
  
})
export class HomeModule { }
