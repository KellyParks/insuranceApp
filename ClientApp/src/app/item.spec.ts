import { Item } from './item';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item(2000, 'Electronics', 'TV', null)).toBeTruthy();
  });
});
