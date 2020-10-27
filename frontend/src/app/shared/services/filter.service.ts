import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICarBrand } from '../models/car-brand.model';

@Injectable({ providedIn: 'root' })
export class FilterService {
  constructor(private httpClient: HttpClient) {}

  getCarBrandList(): Observable<ICarBrand[]> {
    return this.httpClient.get<ICarBrand[]>('assets/car-list.json');
  }
}
