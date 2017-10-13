const { addTwoNumbers, toArray, fromArray } = require('./add-two-numbers');

describe('helpers', () => {
  const list = {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 3,
        next: null,
      }
    }
  };

  const array = [2, 4, 3];

  it('fromArray', () => {
    expect(fromArray(array)).toEqual(list);
  });

  it('toArray', () => {
    expect(toArray(list)).toEqual(array);
  });
});

it('simple usecase', () => {
  const l1 = fromArray([2, 4, 3]);
  const l2 = fromArray([5, 6, 4]);
  const expected = fromArray([7, 0, 8]);

  expect(addTwoNumbers(l1, l2)).toEqual(expected);
});

it('works properly for list different length', () => {
  const l1 = fromArray([1, 1, 1]);
  const l2 = fromArray([2, 2, 2, 2]);
  const expected = fromArray([3, 3, 3, 2]);

  expect(addTwoNumbers(l1, l2)).toEqual(expected);
});

it('big values', () => {
  const l1 = fromArray([2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]);
  const l2 = fromArray([5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]);
  const expected = fromArray([7,0,8,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,1,4,3,9,1]);

  expect(addTwoNumbers(l1, l2)).toEqual(expected);
});
