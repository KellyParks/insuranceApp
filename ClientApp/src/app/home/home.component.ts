import { Component, Inject, OnInit, PipeTransform } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  public grandTotal = 0;
  public items: Item[] = [];
  public newItem: Item;
  public baseUrl;

  constructor(
    public http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
  ) {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<Item[]>(this.baseUrl + 'api/Items').subscribe(result => {
      this.items = result;
    }, error => console.error(error));
  }

  itemDetailsForm = new FormGroup({
    name: new FormControl(''),
    value: new FormControl(''),
    category: new FormControl('') 
  });

  onSubmit() {
    this.newItem = {
      name: this.itemDetailsForm.get('name').value,
      value: this.itemDetailsForm.get('value').value,
      category: this.itemDetailsForm.get('category').value
    };
    this.http.post<Item>(this.baseUrl + 'api/Items', this.newItem).subscribe(result => {
      this.items.push(result);
    }, error => console.error(error));

    console.log(this.items);
  }

  onRemove(id) {
    this.http.delete<Item>(this.baseUrl + 'api/Items/' + id).subscribe(result => {
      console.log('removed item: ' + result);
      this.fetchData();
    }, error => console.error(error));
  }

  getTotalPrice() {
    let totalSum = 0;
    for (const item of this.items) {
      totalSum = totalSum + item.value;
    }
    return totalSum;
  }

}
