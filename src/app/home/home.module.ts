import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardBannerComponent } from './card-banner/card-banner.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { PersonalizeComponent } from './personalize/personalize.component';
import { PhoneCaseSectionComponent } from './phone-case-section/phone-case-section.component';
import { SliderComponent } from './slider/slider.component';
import {  CarouselComponent } from './carousel/carousel.component'

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CardBannerComponent,
    SliderComponent,
    PhoneCaseSectionComponent,
    PersonalizeComponent,
    OurBlogComponent 
  ],
  
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    FormsModule,
    CarouselModule
    
  ]
  
})
export class HomeModule { }
