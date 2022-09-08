import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcrylicPrintComponent } from './acrylic-print/acrylic-print.component';
import { BestAcrylicPhotoComponent } from './best-acrylic-photo/best-acrylic-photo.component';
import { DesignAcrylicNamePlateComponent } from './design-acrylic-name-plate/design-acrylic-name-plate.component';

const routes: Routes = [
  { path:'acrylic-print', component:AcrylicPrintComponent },
  {path:'best-acrylic-wall-photo',component:BestAcrylicPhotoComponent},
  {path:'design-acrylic-name-plate',component:DesignAcrylicNamePlateComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomiseRoutingModule { }
