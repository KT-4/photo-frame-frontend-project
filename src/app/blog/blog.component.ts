import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
   p=1;
  constructor() { }
  cards = [
    // {
    //   img:'../../assets/images/blog/5-master-pieces.jpg',
    //   header:'Can Acrylic Photo Frame be mounted on the wall?'
    // },
    {
      img:'../../assets/images/blog/acrylic-collage-wall-prints-300x225.jpg',
      header:'Which is better, Acrylic or Canvas?'
    },
    {
      img:'../../assets/images/blog/acrylic-frame-for-independence-day-300x200.jpg',
      header:'How are acrylic photos printed?'
    },
    {
      img:'../../assets/images/blog/acrylic-photo-frame-for-home-300x225.jpg',
      header:'How can high-quality Instagram photographs be printed?'
    },
    {
      img:'../../assets/images/blog/ACRYLIC-PICTURE-PRINTING-300x225.jpg',
      header:'Elevate the singles room to a couples room'
    },
    // {
    //   img:'../../assets/images/blog/free-to-print-photos-top.jpg',
    //   header:'How to Prepare for Your Own Photography Exhibition?'
    // },
    {
      img:'../../assets/images/blog/how-to-make-acrylic-prints-300x225.jpg',
      header:'How to Make Your Space Embrace Bold Colors?'
    },
    {
      img:'../../assets/images/blog/rakhi-gifts-for-sister-300x225.jpg',
      header:'Are Customized Gifts the Best Gifts?'
    },
    // {
    //   img:'../../assets/images/blog/round-acrylic-wall-clock-e1660558722366-300x242.jpeg',
    //   header:''
    // },
    {
      img:'../../assets/images/blog/what-thickness-for-acrylic-frame-300x225.jpg',
      header:'In 2022, Let’s make and keep a new year’s resolution using your phone cover'
    },
    {
      img:'../../assets/images/blog/where-can-i-get-photos-printed-300x225.jpg',
      header:'How to maintain your acrylic photo prints?'
    },
  ]
  ngOnInit(): void {
  }

}
