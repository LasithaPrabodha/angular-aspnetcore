import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PipesModule } from '../../shared/pipes/pipes.module';

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
    PipesModule,
    RouterModule.forChild(routes),
  ],
})
export class DetailPageModule {}
