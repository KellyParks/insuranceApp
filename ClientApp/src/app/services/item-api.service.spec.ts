import { TestBed } from '@angular/core/testing';

import { ItemAPIService } from './item-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ItemApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [
      { provide: 'BASE_URL', useValue: 'baseUrl' },
    ],
  }));

  it('should be created', () => {
    const service: ItemAPIService = TestBed.get(ItemAPIService);
    expect(service).toBeTruthy();
  });
});
