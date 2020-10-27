import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';

import { FilterService } from '../../../../shared/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(private filterSvc: FilterService) {}

  @Input() title = '';
  @Input() filter: FormArray | FormControl = null;
  @Input() type = '';

  carModels = [];

  @ViewChild('instance', { static: true }) instance: NgbTypeahead;

  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  ngOnInit(): void {
    this.filterSvc.getCarBrandList().subscribe((result) => {
      this.carModels = result;
    });
  }

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => this.instance && !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        term === ''
          ? this.carModels.slice(0, 10)
          : this.carModels
              .filter(
                (v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );
  };

  formatter = (x: { name: string }) => x.name;
}
