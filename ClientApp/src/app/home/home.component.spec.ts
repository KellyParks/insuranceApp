import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home.component';
import { ItemAPIService } from '../services/item-api.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const itemServiceSpy = jasmine.createSpyObj('itemAPIService', ['getItems']);
  itemServiceSpy.getItems.and.returnValue(of([]));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HomeComponent],
      providers: [
        { provide: ItemAPIService, useValue: itemServiceSpy }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize and fetch data', () => {
    component.ngOnInit();
    expect(itemServiceSpy.getItems).toHaveBeenCalled();
  });

  it('should add element to list', () => {
    let oldList = [
      {
        id: 2,
        name: 'Phone',
        value: 700,
        category: 'Electronics'
      },
      {
        id: 3,
        name: 'Microwave',
        value: 200,
        category: 'Electronics'
      },
    ];

    itemServiceSpy.getItems.and.returnValue(of(oldList));

    const newItem = {
      id: 4,
      name: 'Shirts',
      value: 100,
      category: 'Clothing'
    };
    
    component.onAddedItem(newItem);
    const newList = component['allItems'];
    expect(newList).toContain(newItem);
  });

  it('should refresh list if item is deleted', () => {
    component.onDeletedItem();
    expect(itemServiceSpy.getItems).toHaveBeenCalled();
  });
});
