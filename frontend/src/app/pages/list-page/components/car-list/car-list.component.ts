import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  carlist = [
    {
      name: 'Toyota Allion G Grade 2010',
      price: 4885000,
      mileage: 127000,
      location: 'Colombo',
      img: 'Toyota-Allion.jpg',
    },
    {
      name: 'Toyota Prius 2013',
      price: 4975000,
      mileage: 141000,
      location: 'Kandy',
      img: 'toyota-prius.jpg',
    },
    {
      name: 'Daihatsu Terios 2007',
      price: 4885000,
      mileage: 127000,
      location: 'Colombo',
      img: 'daihatsu-terios.jpg',
    },
    {
      name: 'Suzuki Maruti 2008',
      price: 485000,
      mileage: 150000,
      location: 'Colombo',
      img: 'Maruti_800_AC.jpg',
    },
    {
      name: 'Land Rover 2010',
      price: 4885000,
      mileage: 127000,
      location: 'Colombo',
      img: 'land-rover.jpg',
    },
    {
      name: 'BMW M3 2010',
      price: 12885000,
      mileage: 154000,
      location: 'Colombo',
      img: 'bmw-m3.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
