import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalculationService } from '../../calculation.service';
import { ItemAPIService } from '../../item-api.service';

interface Item {
  id?: number;
  name: string;
  value: number;
  category: string;
}

@Component({
  selector: 'item-information',
  templateUrl: './item-information.component.html',
  styleUrls: ['./item-information.component.css']
})
export class ItemInformationComponent {
  @Input() allItems: Item[];
  @Output() removedItem = new EventEmitter<boolean>();

  public availableCategories = ['Electronics', 'Clothing'];

  constructor(
    public calculationService: CalculationService,
    public itemService: ItemAPIService
  ) { }

  onRemove(id) {
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
