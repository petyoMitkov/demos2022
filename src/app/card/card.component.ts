import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: Card;
  @Input() selectedCardId: string | undefined;

  @Output() select = new EventEmitter<Card>();
}
