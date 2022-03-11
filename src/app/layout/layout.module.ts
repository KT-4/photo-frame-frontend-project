import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardBannerComponent } from './card-banner/card-banner.component';
import { SliderComponent } from './slider/slider.component';
import { PhoneCaseSectionComponent } from './phone-case-section/phone-case-section.component';
import { PersonalizeComponent } from './personalize/personalize.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { OurBlogComponent } from './our-blog/our-blog.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardBannerComponent,
    SliderComponent,
    PhoneCaseSectionComponent,
    PersonalizeComponent,
    OurBlogComponent 
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CarouselModule
  ],
  exports:[
    HeaderComponent, 
    FooterComponent, 
    CarouselComponent,
    CardBannerComponent,
    SliderComponent,
    PhoneCaseSectionComponent,
    PersonalizeComponent,
    OurBlogComponent 
  ]


})
export class LayoutModule { }
