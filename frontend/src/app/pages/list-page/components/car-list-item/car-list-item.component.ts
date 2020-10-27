import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarListItemComponent implements OnInit {
  @Input() image = '';
  @Input() name = '';
  @Input() location = '';
  @Input() mileage = '';
  @Input() price = '';
  constructor() {}

  ngOnInit(): void {}
}
