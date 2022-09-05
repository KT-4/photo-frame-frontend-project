import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-acrylic-photo',
  templateUrl: './best-acrylic-photo.component.html',
  styleUrls: ['./best-acrylic-photo.component.css']
})
export class BestAcrylicPhotoComponent implements OnInit {
  p: number = 1;
  collection: any[] = [1,2];  

  cards = [
    {
      title: '5 Pics Collage Premium Acrylic Wall Photo',
      img:'./../../assets/images/best-acrylic-wall-photo-design/5-pic-acrylic.jpg'
      // img: '../../../assets/images/best-acrylic-wall-photo-design/1-Landscape-Acrylic-Wall-Photo.jpg'
    },
    {
      title: 'Portrait Acrylic Wall Photoe',
       img: '../../../assets/images/best-acrylic-wall-photo-design/portrait-frame-acrylic-photo.jpg'
    },
   {
     title: '1 Landscape Acrylic Wall Photo',
     img: '../../../assets/images/best-acrylic-wall-photo-design/1-Landscape-Acrylic-Wall-Photo.jpg'
     },
    {
      title: '2 Photo Collage Acrylic Wall Photo',
      img:'../../../assets/images/best-acrylic-wall-photo-design/2-Photo-Collage-Acrylic-Wall-Photo.jpg'
      // img: '../../../assets/images/best-acrylic-wall-photo-design/8-photo-collage-acrylic-wall-photo-landscape.jpg'
    },

    {
      title: '8 Collage Portrait Acrylic Wall Photo',
      img:'../../../assets/images/best-acrylic-wall-photo-design/8-photo-collage-acrylic-wall-photo-landscape.jpg'
      // img: '../../../assets/images/best-acrylic-wall-photo-design/Abstract-Acrylic-Wall-Photo-300x300.jpg'
    },

    {
      title: 'Summer Flowers Acrylic Picture Frame',    
      img: '../../../assets/images/best-acrylic-wall-photo-design/Summer-Flowers-Acrylic-Picture-Frame-300x300.jpg'
    },


    {
      title: 'Acrylic Square Wall Photo Frame',    
      img:'../../../assets/images/best-acrylic-wall-photo-design/square-Acrylic-Photo-Frame-300x300.jpg'
      // img: '../../../assets/images/best-acrylic-wall-photo-design/acrylic-photo-frame-300x300.jpg'
    },

    {
      title: 'Flower Acrylic Designer Name Plate',    
      img: '../../../assets/images/best-acrylic-wall-photo-design/Flower-Frame-Acrylic-Wall-Photo-300x300.jpg'
    },

    {
      title: 'Summer Forest Acrylic Photo Frame',    
      img: '../../../assets/images/best-acrylic-wall-photo-design/Butterfly-Acrylic-2-Photo-Frame-300x300.jpg'
    },

    // {
    //   title: 'Disk Acrylic photo frame',    
    //   img: '../../../assets/images/best-acrylic-wall-photo-design/Child-Acrylic-Picture-Frame-300x300.jpg'
    // },

    // {
    //   title: 'Blue Glass Ball Design Acrylic Name Plate',    
    //    img: '../../../assets/images/best-acrylic-wall-photo-design/Child-Colored-Acrylic-Photo-Frame-300x300.jpg'
    // },

    {
      title: 'Child Colored Acrylic Photo Frame',  
      img:'../../../assets/images/best-acrylic-wall-photo-design/Child-Colored-Acrylic-Photo-Frame-300x300.jpg'
      
    },

    {
      title: 'Abstract Acrylic Wall Photo',    
      img:'../../../assets/images/best-acrylic-wall-photo-design/Abstract-Acrylic-Wall-Photo-300x300.jpg'
      // img: '../../../assets/images/best-acrylic-wall-photo-design/Flower-Frame-Acrylic-Wall-Photo-300x300.jpg'
    },

    // {
    //   title: 'Design Acrylic Photo Frame',    
    //   img: '../../../assets/images/best-acrylic-wall-photo-design/Happy-Birthday-Acrylic-Photo-Frame-Cake-300x300.jpg'
    // },

    {
      title: 'Happy Birthday Acrylic Photo Frame Cake',    
      img: '../../../assets/images/best-acrylic-wall-photo-design/Happy-Birthday-Acrylic-Photo-Frame-Cake-300x300.jpg'
    },

    {
      title: 'Christmas Acrylic Photo Frame',    
       img: '../../../assets/images/best-acrylic-wall-photo-design/Christmas-Acrylic-Photo-Frame-300x300.jpg'
      // img: '../../../assets/images/best-acrylic-wall-photo-design/Red-Rose-Acrylic-Photo-Frame-300x300.jpg'
    },

    {
      title: 'Chocolates Acrylic Picture Frame',    
      img:'../../../assets/images/best-acrylic-wall-photo-design/Rose-Flower-Molding-Acrylic-Photo-Frame-300x300.jpg'
    },
    // {
    //   title: 'Rose Flower Molding Acrylic Photo Framee',   
    //   img:'../../../assets/images/best-acrylic-wall-photo-design/Rose-Flower-Molding-Acrylic-Photo-Frame-300x300.jpg' 
    //   // img: '../../../assets/images/best-acrylic-wall-photo-design/square-Acrylic-Photo-Frame-300x300.jpg'
    // },

    // {
    //   title: 'Mother Acrylic Photo Frame',    
    //   img:''
    //   // img: '../../../assets/images/best-acrylic-wall-photo-design/Summer-Flowers-Acrylic-Picture-Frame-300x300.jpg'
    // },

    {
      title: 'Flowers Acrylic Photo Frame',    
      img:'../../../assets/images/best-acrylic-wall-photo-design/Summer-Flowers-Acrylic-Picture-Frame-300x300.jpg'
      // img: '../../../assets/images/best-acrylic-wall-photo-design/Summer-Forest-Acrylic-Photo-Frame-300x300.jpg'
    },

    
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
