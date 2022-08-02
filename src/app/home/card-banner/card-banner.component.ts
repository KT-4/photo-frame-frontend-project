import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-banner',
  templateUrl: './card-banner.component.html',
  styleUrls: ['./card-banner.component.css'],
})
export class CardBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cards = [
    {
      link: 'http://qtonz.com',
      img: '../../../assets/images/home-page-images/home_page_card_banner_Image-1.jpeg',
      title: 'Custom Acrylic Prints',
    },
    {
      link: 'http://qtonz.com',
      img: '../../../assets/images/home-page-images/home_page_card_banner_Image-2.gif',
      title: 'Custom Phone Cases',
    },
    {
      link: 'http://qtonz.com',
      img: '../../../assets/images/home-page-images/home_page_card_banner_Image-3.webp',
      title: ' Custom Posters',
    },
    {
      link: 'http://qtonz.com',
      img: '../../../assets/images/home-page-images/home_page_card_banner_Image-2.gif',
      title: 'Custom Canvas',
    },
    {
      link: 'http://qtonz.com',
      img: '../../../assets/images/home-page-images/home_page_card_banner_Image-4.webp',
      title: 'Custom Canvas',
    },
    {
      link: 'http://qtonz.com',
      img: '../../../assets/images/home-page-images/home_page_card_banner_Image-1.jpeg',
      title: 'Custom Canvas',
    },
  ];
}
