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

test('simple usecase', () => {
  const l1 = fromArray([2, 4, 3]);
  const l2 = fromArray([5, 6, 4]);

  expect(
    addTwoNumbers(l1, l2)
  ).toEqual(
    fromArray([7, 0, 8])
  );
});
