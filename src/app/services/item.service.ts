import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../interfaces/item';
import { FEATURED_ITEMS, ITEMS, RECOMMENDED_ITEMS } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getRecommendedItems(): Observable<Item[]> {
    let items = RECOMMENDED_ITEMS;
    return of(items);
  }

  getFeaturedItems(): Observable<Item[]> {
    let items = FEATURED_ITEMS;
    return of(items);
  }

  // getItem(id: number): Observable<Item> {
  //   let item = ITEMS.find(h => h.id === id)
  //   return of(item);
  // }
}
