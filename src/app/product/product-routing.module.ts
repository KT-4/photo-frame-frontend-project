import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedBackliftComponent } from './led-backlift/led-backlift.component';
import { WallPhotoComponent } from './wall-photo/wall-photo.component';

const routes: Routes = [
  { path:'wall-photo', component:WallPhotoComponent },
  {path:'led-backlift',component:LedBackliftComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
