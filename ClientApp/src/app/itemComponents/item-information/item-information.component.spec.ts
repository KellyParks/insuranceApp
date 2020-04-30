import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemInformationComponent } from './item-information.component';
import { CalculationService } from '../../services/calculation.service';
import { ItemAPIService } from '../../services/item-api.service';
import { of } from 'rxjs';

describe('ItemInformationComponent', () => {
  let component: ItemInformationComponent;
  let fixture: ComponentFixture<ItemInformationComponent>;
  const calculationServiceSpy = jasmine.createSpyObj('calculationService', [
    'getTotalValueOfAllItems',
    'getValueOfItemsInCategory'
  ]);
  const itemServiceSpy = jasmine.createSpyObj('itemService', ['deleteItem']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemInformationComponent],
      providers: [
        { provide: CalculationService, useValue: calculationServiceSpy },
        { provide: ItemAPIService, useValue: itemServiceSpy },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete an item', () => {
    itemServiceSpy.deleteItem.and.returnValue(of(true));
    const id = 2;
    component.onRemove(id);
    expect(itemServiceSpy.deleteItem).toHaveBeenCalledWith(id);
  });

  it('should get the total value of all items', () => {
    calculationServiceSpy.getTotalValueOfAllItems.and.returnValue(250);
    const items = [
      {
        id: 2,
        name: 'Phone',
        value: 100,
        category: 'Electronics'
      },
      {
        id: 4,
        name: 'Camera',
        value: 100,
        category: 'Electronics'
      },
      {
        id: 5,
        name: 'Shirts',
        value: 50,
        category: 'Clothing'
      },
    ];

    component.allItems = items;
    const result = component.getTotalValue();
    expect(result).toEqual(250);
    expect(calculationServiceSpy.getTotalValueOfAllItems).toHaveBeenCalledWith(items);
  });

  it('should get the total value of items for a given category', () => {
    calculationServiceSpy.getValueOfItemsInCategory.and.returnValue(200);
    const items = [
      {
        id: 2,
        name: 'Phone',
        value: 100,
        category: 'Electronics'
      },
      {
        id: 4,
        name: 'Camera',
        value: 100,
        category: 'Electronics'
      },
      {
        id: 5,
        name: 'Shirts',
        value: 50,
        category: 'Clothing'
      },
    ];

    component.allItems = items;
    const result = component.getTotalCategoryValue('Electronics');
    expect(calculationServiceSpy.getValueOfItemsInCategory).toHaveBeenCalledWith('Electronics', items);
    expect(result).toEqual(200);
  });
});
