import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarListItemComponent {
  @Input() carData = null;

  @Output() onItemClick: EventEmitter<number> = new EventEmitter();

  @HostListener('click')
  onClick() {
    this.onItemClick.emit(this.carData.id);
  }
}
