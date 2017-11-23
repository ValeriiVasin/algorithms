import { removeDuplicates } from './26-remove-duplicates-from-sorted-array';

test('modify array in-place', () => {
  const arr = [1, 1, 2];
  removeDuplicates(arr);
  expect(arr.length).toBe(2);

});

test('returns proper length', () => {
  expect(removeDuplicates([1,1,2])).toBe(2);
});
