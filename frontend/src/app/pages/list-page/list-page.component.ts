import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  carModels = [];

  form = this.fb.group({
    brand: this.fb.control(''),
    year: this.fb.array([this.fb.control(''), this.fb.control('')]),
    price: this.fb.array([this.fb.control(''), this.fb.control('')]),
    search: this.fb.control(''),
  });

  constructor(private fb: FormBuilder, private filterSvc: FilterService) {}

  ngOnInit(): void {
    this.filterSvc.getCarBrandList().subscribe((result) => {
      this.carModels = result;
    });
  }
}
