import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../types';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent {
  @Input() data: Card;
}
