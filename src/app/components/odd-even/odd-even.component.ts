import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item';
import { itemsLong } from '../../utils/utils';

@Component({
  selector: 'my-odd-even',
  templateUrl: './odd-even.component.html',
  styles: [`
    .odd {
      background-color: rgba(255, 0, 255, 0.45);
    }

    .even {
      background-color: rgba(0, 0, 0, 0.45);
    }
  `]
})
export class OddEvenComponent implements OnInit {
  items: Item[];

  ngOnInit() {
    this.items = itemsLong;
  }

  trackBy (index: number, item: Item): string {
    return item._id;
  }
}