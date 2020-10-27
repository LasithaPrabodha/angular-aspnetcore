import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../../shared/directives/directives.module';

const routes: Routes = [
  {
    path: '',
    component: DetailPageComponent,
  },
];

@NgModule({
  declarations: [DetailPageComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DirectivesModule,
    RouterModule.forChild(routes),
  ],
})
export class DetailPageModule {}
