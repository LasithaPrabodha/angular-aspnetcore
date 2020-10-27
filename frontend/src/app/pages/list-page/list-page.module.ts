import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarListComponent } from './components/car-list/car-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarListItemComponent } from './components/car-list-item/car-list-item.component';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,
  },
];

@NgModule({
  declarations: [ListPageComponent, FilterComponent, CarListComponent, CarListItemComponent],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ListPageModule {}
