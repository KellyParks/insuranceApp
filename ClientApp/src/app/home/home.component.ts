import { Component, OnInit } from '@angular/core';
import { ItemAPIService } from '../services/item-api.service';
import { Item } from '../interfaces/item-interface';

/**
 * The parent component that is responsible for managing the state of list of items.
 * Child components listen to 'allItems' for changes.
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //whenever a child compoenent removes or adds an item, this value is updated.
  private allItems: Item[] = [];

  constructor(
    private itemApiService: ItemAPIService,
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.itemApiService.getItems().subscribe(result => {
      this.allItems = result;
    }, error => console.error(error));
  }

  onAddedItem(newItem: Item) {
    this.allItems.push(newItem);
  }

  onDeletedItem() {
    this.fetchData();
  }

}
