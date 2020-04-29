import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemFormComponent } from './add-item-form.component';
import { ItemAPIService } from '../../item-api.service';

describe('AddItemFormComponent', () => {
  let component: AddItemFormComponent;
  let itemApiService: ItemAPIService;
  let fixture: ComponentFixture<AddItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemFormComponent],
      providers: [ItemAPIService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemFormComponent);
    component = fixture.componentInstance;
    itemApiService = TestBed.get(ItemAPIService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save a new item, and update the list', () => {
    let newItem = {
      name: 'Computer',
      value: 1000,
      category: 'Electronics'
    };
    component.onSubmit();
    expect(itemApiService.createItem).toHaveBeenCalledWith(newItem);
    expect(component).toBeTruthy();
  });
});
