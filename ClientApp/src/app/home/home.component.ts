import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CalculationService } from '../calculation.service';
import { ItemService } from '../item.service';

interface Item {
  id?: number;
  name: string;
  value: number;
  category: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public availableCategories = ['Electronics', 'Clothing'];
  public items: Item[] = [];
  public newItem: Item;

  constructor(
    public calculationService: CalculationService,
    public itemService: ItemService
  ) { }

  itemDetailsForm = new FormGroup({
    name: new FormControl(''),
    value: new FormControl(''),
    category: new FormControl('')
  });

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.itemService.getItems().subscribe(result => {
      this.items = result;
    }, error => console.error(error));
  }

  onSubmit() {
     let newItem = {
      name: this.itemDetailsForm.get('name').value,
      value: this.itemDetailsForm.get('value').value,
      category: this.itemDetailsForm.get('category').value
    };

    this.itemService.createItem(newItem).subscribe(result => {
      this.items.push(result)
    }, error => console.error(error));
  }

  onRemove(id) {
    this.itemService.deleteItem(id).subscribe(result => {
      if (result) {
        this.fetchData()
      }
    }, error => console.error(error));
  }

  getTotalValue() {
    return this.calculationService.getTotalValueOfAllItems(this.items);
  }

  getTotalCategoryValue(category: string) {
    return this.calculationService.getValueOfItemsInCategory(category, this.items);
  }

}
