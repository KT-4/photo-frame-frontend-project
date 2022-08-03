import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // home page slider start //
  //-----------------------//

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
    nav: true,
  };

  slides = [
    {
      id: '1',
      price: '1520',
      discount: 50,
      title: 'Customised Premium Acrylic Picture',
      img: '../../../assets/images/home-page-images/home_page_slider_Image-1.jpg',
    },
    {
      id: '2',
      price: '3200',
      discount: 30,
      title: 'Customised Dribbble Canvas Art',
      img: '../../../assets/images/home-page-images/home_page_slider_Image-2.jpg',
    },
    {
      id: '3',
      price: '1650',
      discount: 65,
      title: 'Customized Heart Acrylic - 11x11 Inch',
      img: '../../../assets/images/home-page-images/home_page_slider_Image-3.jpg',
    },
    {
      id: '4',
      price: '1732',
      discount: 48,
      title: 'Ganesha Premium Acrylic Wall Art',
      img: '../../../assets/images/home-page-images/home_page_slider_Image-4.jpg',
    },
    {
      id: '5',
      price: '3200',
      discount: 72,
      title: 'Customised Oil Paint Acrylic Picture',
      img: '../../../assets/images/home-page-images/home_page_slider_Image-5.jpg',
    },
  ];

  // home page slider End //
  //-----------------------//
}
