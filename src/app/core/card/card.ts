import { Component, input } from '@angular/core';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  conf=input.required<Conference>();
}
