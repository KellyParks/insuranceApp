import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  getValueOfItemsInCategory(category, items) {
    let categorySum = 0;
    for (const item of items) {
      if (item.category === category) {
        categorySum = categorySum + item.value;
      }
    }
    return categorySum;
  }

  getTotalValueOfAllItems(items) {
    let totalSum = 0;
    for (const item of items) {
      totalSum = totalSum + item.value;
    }
    return totalSum;
  }
}
