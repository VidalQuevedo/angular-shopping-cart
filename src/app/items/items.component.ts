import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items$: Observable<Item[]> | undefined;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.items$ = this.shoppingCartService.getItems();
  }

  updateQuantity($event: Event, item: Item) {
    const quantity = ($event as any)?.target?.value;
    this.shoppingCartService.updateQuantity(quantity, item);
  }
  
  deleteItem(item: Item) {
    this.shoppingCartService.deleteItem(item);
  }
}
