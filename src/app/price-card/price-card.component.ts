import { Component } from '@angular/core';
import {Input} from '@angular/core';
import { Card } from '../Card';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {
  @Input() card:Card;
}
