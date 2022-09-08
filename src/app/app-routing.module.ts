import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { GallaryComponent } from './gallary/gallary.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { AuthGuard } from './_guards/auth.guard';
import { Role } from './_models/role';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'customise',
    loadChildren: () =>
      import('./customise/customise.module').then((m) => m.CustomiseModule),
    canActivate: [AuthGuard],
  },
  {path:'track-order',component:TrackOrderComponent},
  {path:'blog',component:BlogComponent},
  {path:'gallary',component:GallaryComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
