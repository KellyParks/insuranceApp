import { Component, OnInit } from '@angular/core';
import { ItemAPIService } from '../item-api.service';

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

  public allItems: Item[] = [];

  constructor(
    public itemApiService: ItemAPIService,
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
