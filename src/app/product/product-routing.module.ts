import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WallPhotoComponent } from './wall-photo/wall-photo.component';

const routes: Routes = [
  { path:'wall-photo', component:WallPhotoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
