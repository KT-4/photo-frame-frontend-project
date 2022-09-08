import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gallary } from '../_models/gallary';
@Injectable({
  providedIn: 'root'
})
export class GallaryService {

  constructor(private Http:HttpClient) { }


  Gallary(User:any){
     return this.Http.post<Gallary>(`${environment.apiUrl}/gallary`,User)
  }

}
