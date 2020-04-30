import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItemFormComponent } from './add-item-form.component';
import { ItemAPIService } from '../../services/item-api.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';

describe('AddItemFormComponent', () => {
  let component: AddItemFormComponent;
  let itemApiService: ItemAPIService;
  let fixture: ComponentFixture<AddItemFormComponent>;
  const itemServiceSpy = jasmine.createSpyObj('itemService', ['createItem']);
  itemServiceSpy.createItem.and.returnValue(of(Observable));


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemFormComponent],
      providers: [
        { provide: ItemAPIService, useValue: itemServiceSpy },
      ],
      imports: [ReactiveFormsModule]
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
    const newItem = {
      name: 'Computer',
      value: 1000,
      category: 'Electronics'
    };
    const newItemDetails = new FormGroup({
      name: new FormControl('Computer'),
      value: new FormControl(1000),
      category: new FormControl('Electronics')
    });
    component.itemDetailsForm = newItemDetails;
    component.onSubmit();
    expect(itemApiService.createItem).toHaveBeenCalledWith(newItem);
  });
});
