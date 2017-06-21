/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export function ListNode(value) {
  this.val = value;
  this.next = null;
}

export const addTwoNumbers = function(l1, l2) {
  return fromArray(
    addArrays(toArray(l1), toArray(l2))
  );
};

const traverse = (list, callback) => {
  do {
    callback(list.val);
    list = list.next;
  } while (list);
};

export const fromArray = values => {
  const result = new ListNode(values[0]);
  let res = result;

  values.slice(1).forEach(value => {
    res = res.next = new ListNode(value);
  });

  return result;
}

export const toArray = list => {
  const result = [];

  traverse(list, value => result.push(value));

  return result;
}

const addArrays = (one, two) => {
  const oneLength = one.length;
  const twoLength = two.length;
  const length = oneLength > twoLength ? oneLength : twoLength;

  let borrow = 0;
  const result = [];
  for (let i = 0; i < length; i++) {
    const sum = (one[i] || 0) + (two[i] || 0) + borrow;
    const value = sum % 10;

    result[i] = value;
    borrow = (sum - value) / 10;
  }

  if (borrow) {
    result.push(borrow);
  }

  return result;
};
