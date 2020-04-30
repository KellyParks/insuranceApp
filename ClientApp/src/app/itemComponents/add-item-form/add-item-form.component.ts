import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemAPIService } from '../../services/item-api.service';
import { Item } from '../../interfaces/item-interface';

/**
 * This component is responsible for adding an item to the list.
*/
@Component({
  selector: 'add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent {
  @Output() addedItem = new EventEmitter<Item>();
  public availableCategories = ['Electronics', 'Clothing'];

  constructor(
    public itemApiService: ItemAPIService,
  ) { }

  itemDetailsForm = new FormGroup({
    name: new FormControl(''),
    value: new FormControl(''),
    category: new FormControl('')
  });

  onSubmit() {
     const newItem = {
      name: this.itemDetailsForm.get('name').value,
      value: this.itemDetailsForm.get('value').value,
      category: this.itemDetailsForm.get('category').value
    };

    this.itemApiService.createItem(newItem).subscribe(result => {
      this.addedItem.emit(result);
    }, error => console.error(error));
  }
}
