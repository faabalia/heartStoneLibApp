import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {CardService} from '../shared/card.service';

import {Card} from '../shared/card.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html'
})
export class CardDetailPage {

  card: Card;

  constructor(private route: ActivatedRoute, 
  			  private cardService: CardService) { }

  ionViewWillEnter() {
    const cardId = this.route.snapshot.paramMap.get('cardId');

    this.cardService.getCardById(cardId).subscribe(
        (card: Card[]) => {
          this.card = card.map((card: Card) => {
            card.text = this.cardService.replaceCardTextLine(card.text);
            return card;
          })[0];
        }
      );
  }

  updateImage() {
    this.card.img = '/assets/image/DefaultCard.png';
  }

}