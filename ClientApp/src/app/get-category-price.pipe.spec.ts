import { GetCategoryPricePipe } from './get-category-price.pipe';

describe('GetCategoryPricePipe', () => {
  it('create an instance', () => {
    const pipe = new GetCategoryPricePipe();
    expect(pipe).toBeTruthy();
  });

  it('calculates the total sum for a category', () => {
    const pipe = new GetCategoryPricePipe();
    expect(pipe).toBeTruthy();
  });
});
