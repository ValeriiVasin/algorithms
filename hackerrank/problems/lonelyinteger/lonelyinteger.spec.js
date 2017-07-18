import { lonelyInteger } from './lonelyinteger';

it('lonely integer', () => {
  // expect(lonelyInteger([1, 2, 2])).toBe(1);
  // expect(lonelyInteger([1])).toBe(1);
  expect(lonelyInteger([0, 0, 1, 2, 1])).toBe(2);
});
