import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcrylicPrintComponent } from './acrylic-print/acrylic-print.component';

const routes: Routes = [
  { path:'acrylic-print', component:AcrylicPrintComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomiseRoutingModule { }
