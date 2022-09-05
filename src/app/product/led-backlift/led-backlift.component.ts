import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-led-backlift',
  templateUrl: './led-backlift.component.html',
  styleUrls: ['./led-backlift.component.css']
})
export class LedBackliftComponent implements OnInit {
   
  zoom=false;
  text=false;
  
  @ViewChild('h')h!:ElementRef;
  @ViewChild('z')z!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  showZoom(){
    this.zoom = true
    this.text = false
  }
  showText(){
    this.zoom = false
    this.text = true
  }
  deepdive(){
    let zoomvalue = (this.z.nativeElement.value)/100

        this.h.nativeElement.style.webkitTransform = "scale("+zoomvalue+")";
        this.h.nativeElement.style.transform = "scale("+zoomvalue+")";
  }

}
