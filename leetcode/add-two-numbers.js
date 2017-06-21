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
  return toList(toValue(l1) + toValue(l2));
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

function toList(number) {
  const result = new ListNode(number % 10);

  number = Math.floor(number / 10);

  let res = result;
  while (number) {
    res.next = new ListNode(number % 10);

    number = Math.floor(number / 10);
    res = res.next;
  }

  return result;
}

function toValue(list) {
  let result = list.val;
  let i = 1;

  while (list = list.next) {
    result += Math.pow(10, i) * list.val;
    i += 1;
  }

  return result;
}
