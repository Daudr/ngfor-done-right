import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item';
import { items, makeRandomId, makeRandomName } from '../../utils/utils'

@Component({
  selector: 'my-track-by',
  templateUrl: './track-by.component.html',
  styles: [``]
})
export class TrackByComponent implements OnInit {
  public items: Item[];

  public ngOnInit() {
    this.items = items;
  }

  public addItem(): void {
    this.items = [...this.items, { _id: makeRandomId(), name: makeRandomName() }]
  }

  public trackByFunction (index: number, item: Item): string {
    return item._id;
  }
}