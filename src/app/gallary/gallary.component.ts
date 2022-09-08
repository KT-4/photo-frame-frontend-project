import { Component, OnInit } from '@angular/core';
import { GallaryService } from '../_services/gallary.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  constructor(private gallaryService:GallaryService) { }

  ngOnInit(): void {
  }

  // GallaryCall(){
  //     this.gallaryService.Gallary(this.GallaryCall.name).subscribe
  // }

}
