import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcrylicPrintComponent } from './acrylic-print/acrylic-print.component';
import { BestAcrylicPhotoComponent } from './best-acrylic-photo/best-acrylic-photo.component';

const routes: Routes = [
  { path:'acrylic-print', component:AcrylicPrintComponent },
  {path:'best-acrylic-wall-photo',component:BestAcrylicPhotoComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomiseRoutingModule { }
