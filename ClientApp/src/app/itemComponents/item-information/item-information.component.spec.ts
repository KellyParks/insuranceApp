import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemInformationComponent } from './item-information.component';

describe('TestComponent', () => {
  let component: ItemInformationComponent;
  let fixture: ComponentFixture<ItemInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemInformationComponent]
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
    const id = 2;
    component.onRemove(id);
    expect(itemService.deleteItem).toHaveBeenCalledWith(id);
    expect(component).toBeTruthy();
  });

  it('should get the total value of all items', () => {
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
    const result = component.getTotalValue();
    expect(result).toEqual(250);
    expect(calculationService.getTotalValueOfAllItems()).toHaveBeenCalledWith(items);
    expect(component).toBeTruthy();
  });

  it('should get the total value of items for a given category', () => {
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
    const result = component.getTotalCategoryValue('Electronics');
    expect(calculationService.getValueOfItemsInCategory()).toHaveBeenCalledWith('Electronics', items);
    expect(component).toBeTruthy();
    expect(result).toEqual(200);
  });
});
