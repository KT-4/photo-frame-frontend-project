import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acrylic-print',
  templateUrl: './acrylic-print.component.html',
  styleUrls: ['./acrylic-print.component.css']
})
export class AcrylicPrintComponent implements OnInit {
  

   cards =[
    {
      img:'../../../assets/images/acrylic-print/bird-acrylic-name-plate.jpg',
      title:"Birds Acrylic Designer Name Plate"
    },
    {
      img:'../../../assets/images/acrylic-print/Ganesa-Acrylic-Designer-Name-Plate-300x300.jpg',
      title:"Ganesa Acrylic Designer Name Plate"
    },
    {
      img:'../../../assets/images/acrylic-print/Marble-Design-Acrylic-Name-Plate-300x300.jpg',
      title:"Marble Design Acrylic Name Plate"
    },
    {
      img:'../../../assets/images/acrylic-print/Owl-Design-Acrylic-Designer-Name-Plate-300x300.jpg',
      title:"Owl Design Acrylic Designer Name Plate"
    },
    {
      img:'../../../assets/images/acrylic-print/Summer-Beach-Wodden-Design-Acrylic-Name-Plate-300x300.jpg',
      title:"Summer Beach Wodden Design Acrylic Name Plate"
    },
    {
      img:'../../../assets/images/acrylic-print/Green-Leaves-Acrylic-Designer-Name-Plate-1-300x300.jpg',
      title:"Green Leaves Acrylic Designer Name Plate"
    },
    {
      img:'../../../assets/images/acrylic-print/Happy-Design-Acrylic-Name-Plate-300x300.jpg',
      title:"Happy Design Acrylic Name Plate"
    },
    {
      img:'../../../assets/images/acrylic-print/Bappa-Design-Acrylic-Name-Plate-300x300.jpg',
      title:"Bappa Design Acrylic Name Plate"
    },
    
    
 ]
  constructor() { }
  
  ngOnInit(): void {
  }

}
