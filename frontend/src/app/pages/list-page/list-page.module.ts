import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarListComponent } from './components/car-list/car-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarListItemComponent } from './components/car-list-item/car-list-item.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,
  },
];

@NgModule({
  declarations: [ListPageComponent, CarListComponent, CarListItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    DirectivesModule,
    RouterModule.forChild(routes),
  ],
})
export class ListPageModule {}
