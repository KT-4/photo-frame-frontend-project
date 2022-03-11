import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


// home page slider start //
//-----------------------//

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
    nav: true
  }
   
    slides = [
      {id: 1, price:'1520', discount:50, title: 'Customised Premium Acrylic Picture', img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2021/6/22/4be5aa08-cd8f-49e1-b43a-cecea15c1fe61624347803587-1.jpg"},
      {id: 2, price:'3200', discount:30, title: 'Customised Dribbble Canvas Art', img: "https://cdn.dribbble.com/users/3440318/screenshots/14159566/media/27dbe16a5ac65d15ff28da146472e603.jpg"},
      {id: 3, price:'1650', discount:65, title: 'Customized Heart Acrylic - 11x11 Inch', img: "https://s.omgs.in/wp-content/uploads/2021/07/Acrylic-photo-heart-shaped-premium-acrylic-500x500.jpg"},
      {id: 4, price:'1732', discount:48, title: 'Ganesha Premium Acrylic Wall Art', img: "https://s.omgs.in/wp-content/uploads/2021/07/ganesha-wall-art-500x500.jpg"},
      {id: 5, price:'3200', discount:72, title: 'Customised Oil Paint Acrylic Picture', img: "https://i.pinimg.com/originals/76/cc/98/76cc983cb5c89e341b2914863ceef807.jpg"},
    ];

// home page slider End //
//-----------------------//

}
