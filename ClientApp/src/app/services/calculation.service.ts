import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item-interface';

/**
 * Calculates the sum of all items in a given category, as well as the total value of all items.
*/
@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  getValueOfItemsInCategory(category: string, items: Item[]): number {
    let categorySum = 0;
    for (const item of items) {
      if (item.category === category) {
        categorySum = categorySum + item.value;
      }
    }
    return categorySum;
  }

  getTotalValueOfAllItems(items: Item[]): number {
    let totalSum = 0;
    for (const item of items) {
      totalSum = totalSum + item.value;
    }
    return totalSum;
  }
}
