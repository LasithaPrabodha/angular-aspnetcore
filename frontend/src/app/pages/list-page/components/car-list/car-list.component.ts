import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  carlist = [
    {
      id: 'toyota-allion-g',
      name: 'Toyota Allion G Grade 2010',
      price: 4885000,
      mileage: 127000,
      location: 'Colombo',
      img: 'Toyota-Allion.jpg',
    },
    {
      id: 'toyota-prius',
      name: 'Toyota Prius 2013',
      price: 4975000,
      mileage: 141000,
      location: 'Kandy',
      img: 'toyota-prius.jpg',
    },
    {
      id: 'daihatsu-terios',
      name: 'Daihatsu Terios 2007',
      price: 4885000,
      mileage: 127000,
      location: 'Colombo',
      img: 'daihatsu-terios.jpg',
    },
    {
      id: 'suzuki-maruti',
      name: 'Suzuki Maruti 2008',
      price: 485000,
      mileage: 150000,
      location: 'Colombo',
      img: 'Maruti_800_AC.jpg',
    },
    {
      id: 'land-rover',
      name: 'Land Rover 2010',
      price: 4885000,
      mileage: 127000,
      location: 'Colombo',
      img: 'land-rover.jpg',
    },
    {
      id: 'bmw-m3',
      name: 'BMW M3 2010',
      price: 12885000,
      mileage: 154000,
      location: 'Colombo',
      img: 'bmw-m3.jpg',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  trackByFn = (index, item) => item.id;

  navigate(id) {
    this.router.navigate([id]);
  }
}
