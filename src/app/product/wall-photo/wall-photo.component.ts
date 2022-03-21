import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall-photo',
  templateUrl: './wall-photo.component.html',
  styleUrls: ['./wall-photo.component.css']
})
export class WallPhotoComponent implements OnInit {
  zoom=false;
  text=false;
  
  constructor() { }

  ngOnInit(): void {
  }


// zoom and text input show and hide functions
  showZoom(){
    this.zoom = true
    this.text = false
  }
  showText(){
    this.zoom = false
    this.text = true
  }
}
