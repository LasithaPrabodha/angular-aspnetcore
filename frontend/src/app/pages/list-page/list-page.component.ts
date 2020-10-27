import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  form = this.fb.group({
    brand: this.fb.control(''),
    year: this.fb.array([this.fb.control(''), this.fb.control('')]),
    price: this.fb.array([this.fb.control(''), this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
