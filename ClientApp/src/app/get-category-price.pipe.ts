import { Pipe, PipeTransform } from '@angular/core';
import { HomeComponent } from './home/home.component';

interface Item {
  id?: number;
  name: string;
  value: number;
  category: string;
}

@Pipe({
  name: 'getCategoryPrice'
})
export class GetCategoryPricePipe implements PipeTransform {

  constructor(public itemsComponent: HomeComponent) {}

  transform(category: string): any {
    return this.getCategoryPrice(category);
  }

  getCategoryPrice(category) {
    let categorySum = 0;
    for (const item of this.itemsComponent.items) {
      if (item.category === category) {
        categorySum = categorySum + item.value;
      }
    }
    return categorySum;
  }

}
