import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DetailPageComponent,
  },
];

@NgModule({
  declarations: [DetailPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DetailPageModule {}
