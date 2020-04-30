import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalculationService } from '../../services/calculation.service';
import { ItemAPIService } from '../../services/item-api.service';
import { Item } from '../../interfaces/item-interface';

/**
 * Displays all the items, ordered by category. In addition, it displays
 * the total value of items in a single category, as well as the total
 * value of all items in the list.
*/
@Component({
  selector: 'item-information',
  templateUrl: './item-information.component.html',
  styleUrls: ['./item-information.component.css']
})
export class ItemInformationComponent {
  //collects the value passed in from home.component.html
  @Input() allItems: Item[];
  //sends an event to home.component if an item is removed.
  //This tells the parent that it should refresh the list.
  @Output() removedItem = new EventEmitter<boolean>();

  public availableCategories = ['Electronics', 'Clothing'];

  constructor(
    public calculationService: CalculationService,
    public itemService: ItemAPIService
  ) { }

  onRemove(id: number) {
    this.itemService.deleteItem(id).subscribe(() => {
      this.removedItem.emit(true);
    }, error => console.error(error));
  }

  getTotalValue() {
    return this.calculationService.getTotalValueOfAllItems(this.allItems);
  }

  getTotalCategoryValue(category: string) {
    return this.calculationService.getValueOfItemsInCategory(category, this.allItems);
  }

}
