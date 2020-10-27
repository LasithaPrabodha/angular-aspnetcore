import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable, merge } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';

@Component({
  selector: 'app-typeahead',
  template: `
    <input
      type="text"
      class="form-control"
      #instance="ngbTypeahead"
      [attr.placeholder]="placeholder"
      [(ngModel)]="filter"
      [ngbTypeahead]="search"
      [resultTemplate]="rt"
      [inputFormatter]="formatter"
      [editable]="disabled"
      (focus)="focus$.next($event.target.value)"
      (click)="click$.next($event.target.value)"
    />

    <ng-template #rt let-r="result" let-t="term">
      <img [src]="r['logo']" class="mr-1" style="width: 16px" />
      <ngb-highlight [result]="r.name" [term]="t"></ngb-highlight>
    </ng-template>
  `,
  styles: [''],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TypeaheadComponent),
      multi: true,
    },
  ],
})
export class TypeaheadComponent implements ControlValueAccessor {
  @Input() list = [];
  @Input() placeholder = '';

  onTouched = () => {};
  onChange = (_) => {};

  @ViewChild('instance', { static: true }) instance: NgbTypeahead;

  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  filter = null;
  disabled = false;

  constructor() {}

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
          ? this.list.slice(0, 10)
          : this.list
              .filter(
                (v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );
  };

  formatter = (x: { name: string }) => x.name;

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value: string) {
    if (this.filter !== value) {
      this.filter = value;
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
