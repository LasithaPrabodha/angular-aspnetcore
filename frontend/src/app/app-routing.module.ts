import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/list-page/list-page.module').then(
        (m) => m.ListPageModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./pages/detail-page/detail-page.module').then(
        (m) => m.DetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
