import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sideNav:boolean=false

  close(){
    this.sideNav = true
  }

  constructor() { }

  // route(){
  //   if (i == 0) this.router.navigate(["/"])
  //   else if (i == 1) this.router.navigate(["/product/wall-photo"])
  //   else if (i == 2) this.router.navigate([""])
  //   else if (i == 3) this.router.navigate([""])
  //   else if (i == 4) this.router.navigate([""])
  // this.isNavOpened=false;
  // }

  ngOnInit(): void {
  }

 

}
