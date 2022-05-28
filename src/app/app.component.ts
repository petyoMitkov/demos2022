import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card, CountyCodeEnum } from './types';

const MOCK_DATA = [
  {
    id: '1',
    title: 'Rex',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/07/10/14/01/dog-3528760_960_720.jpg',
    country: CountyCodeEnum.BG,
  },
  {
    id: '2',
    title: 'Tom',
    imageUrl:
      'https://cdn.pixabay.com/photo/2021/12/01/18/17/cat-6838844_960_720.jpg',
    country: CountyCodeEnum.DE,
  },
  {
    id: '3',
    title: 'Beethoven',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    country: CountyCodeEnum.SP,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular demo app';
  
  description$: Observable<string> = of('Data binding and pipes demo.');

  cardList: Card[] = MOCK_DATA;
  selectedCard: Card = this.cardList[0];

  onSelect(card: Card) {
    this.selectedCard = card;
  }
}
