import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  const items = [
    {
      id: 1,
      name: 'Television',
      value: 1000,
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Shoes',
      value: 300,
      category: 'Clothing'
    },
    {
      id: 3,
      name: 'BB-8 Robot',
      value: 200,
      category: 'Electronics'
    },
    {
      id: 4,
      name: 'Shirts',
      value: 500,
      category: 'Clothing'
    },
    {
      id: 5,
      name: 'Cell Phone',
      value: 600,
      category: 'Electronics'
    },
  ];

  it('should be created', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    expect(service).toBeTruthy();
  });

  it('should return the total value of items in a category', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    const result = service.getValueOfItemsInCategory('Electronics', items);
    expect(result).toEqual(1800);
  });

  it('should return the total value of all items', () => {
    const service: CalculationService = TestBed.get(CalculationService);
    const result = service.getTotalValueOfAllItems(items);
    expect(result).toEqual(2600);
  });
});
