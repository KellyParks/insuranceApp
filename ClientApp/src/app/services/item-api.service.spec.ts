import { TestBed } from '@angular/core/testing';

import { ItemAPIService } from './item-api.service';

describe('ItemApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemAPIService = TestBed.get(ItemAPIService);
    expect(service).toBeTruthy();
  });
});
