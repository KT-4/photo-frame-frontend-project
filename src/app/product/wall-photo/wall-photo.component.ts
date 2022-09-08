import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wall-photo',
  templateUrl: './wall-photo.component.html',
  styleUrls: ['./wall-photo.component.css']
})
export class WallPhotoComponent implements OnInit {
  zoom=false;
  text=false;
   
  image:any
  choosen:boolean = false;
  submitedData:any
  getProfile:any;
  
  @ViewChild('h')h!:ElementRef;
  @ViewChild('z')z!:ElementRef;

  // @ViewChild('fileInput')
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
  deepdive(){
    let zoomvalue = (this.z.nativeElement.value)/100

        this.h.nativeElement.style.webkitTransform = "scale("+zoomvalue+")";
        this.h.nativeElement.style.transform = "scale("+zoomvalue+")";
  }

  filechoose(event:any){
    if(event.target.value){
       this.image = <File>event.target.files[0];
       this.choosen = true;
      }
    }
    
    submitPhoto(){
      let fd = new FormData();
      this.submitedData = true;
      if(!this.image){
        fd.append('profileImage',this.image,this.image.name);
        
      }
    }
   
}
