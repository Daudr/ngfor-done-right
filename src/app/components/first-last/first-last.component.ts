import{ Component, OnInit } from '@angular/core';

import { Item } from '../../models/item';
import { itemsLong } from '../../utils/utils';

@Component({
  selector:'my-first-last',
  templateUrl: './first-last.component.html',
  styles: [`
    .first {
  background-color: rgba(0, 0, 255, 0.45);
}

.last {
  background-color: rgba(0, 255, 0, 0.45);
}
  `]
})
export class FirstLastComponent implements OnInit {
  public items: Item[];

  ngOnInit () {
    this.items = itemsLong;
  }
}