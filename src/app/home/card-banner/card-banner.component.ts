import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-banner',
  templateUrl: './card-banner.component.html',
  styleUrls: ['./card-banner.component.css']
})
export class CardBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    { link:"http://qtonz.com", img:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/4/3/1/RX_HGMAG050_GalleryWalls-01.jpg.rend.hgtvcom.1280.1707.suffix/1491312942806.jpeg", title:"Custom Acrylic Prints" },
    { link:"http://qtonz.com", img:"https://cdn.shopify.com/s/files/1/0301/5131/1495/products/cover-it-up-phone-case-design-your-custom-phone-case-16104501870727_grande.gif", title:"Custom Phone Cases"},
    { link:"http://qtonz.com", img:"https://media.architecturaldigest.com/photos/56fabad13806d3f129921125/master/w_1771,h_2300,c_limit/family-pictures-gallery-wall-ideas-02.jpg", title:" Custom Posters"},
    { link:"http://qtonz.com", img:"https://cdn.shopify.com/s/files/1/1568/8443/files/personalized-canvas-prints.jpg", title:"Custom Canvas"},
  ]

}
