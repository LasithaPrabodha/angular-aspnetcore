import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavBarComponent, TypeaheadComponent],
  imports: [CommonModule, FormsModule, NgbModule],
  exports: [NavBarComponent, TypeaheadComponent],
})
export class ComponentsModule {}
