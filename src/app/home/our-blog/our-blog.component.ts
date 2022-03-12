import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.css']
})
export class OurBlogComponent implements OnInit {
 posts:any = []

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {link:'http://qtonz.com', img:'https://www.shemazing.net/wp-content/uploads/2015/12/of1.jpg', tage:'BLOG',title:'5 Ways to brighten up your office space',dis:'With the onset of 2020, the whole world was forced to stay at home for their safety. The pandemic took [...]'},
      {link:'http://qtonz.com', img:'https://s.omgs.in/wp-content/uploads/2022/01/valentines-day-gift-ideas-300x225.jpeg', tage:'BLOG',title:"5 Valentine's Day Gift Ideas for your partner",dis:"The big day for all the lovebirds is around the corner, valentine's 2022. Got any plans yet? The usual date [...]"},
      {link:'http://qtonz.com', img:'https://i.etsystatic.com/7727422/r/il/d83725/3179857437/il_570xN.3179857437_qcjj.jpg', tage:'BLOG',title:'Transform Your Photo to Art With a Custom Canvas Print',dis:'Have you ever dreamt of having your photos displayed on giant canvas prints stretched over sturdy bars? A picture is [...]'},
    ]
    
  }

  

  

}
