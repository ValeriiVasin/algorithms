import { mergeTwoLists, ListNode } from './21-merge-two-sorted-lists';

function toListNode(arr) {
  const length = arr.length;

  if (length === 0) {
    throw 'You provided empty array into the input of toListNode helper. Please provide non empty array';
  }

  const result = new ListNode(arr[0]);
  let ref = result;
  for (let i = 1; i < length; i += 1) {
    ref.next = new ListNode(arr[i]);
    ref = ref.next;
  }

  return result;
}

describe('to list node helper', () => {
  test('instance of ListNode', () => {
    expect(toListNode([3, 2, 1]) instanceof ListNode).toBe(true);
  });

  test('single item', () => {
    expect(toListNode([5]).toString()).toBe('[5]');
  });

  test('few items', () => {
    expect(toListNode([1, 2, 3]).toString()).toBe('[1,2,3]');
  });
});

describe('sorted ASC', () => {
  test('more than few elements in each', () => {
    const one = toListNode([-1, 2, 6, 10]);
    const two = toListNode([0, 1]);

    expect(mergeTwoLists(one, two).toString()).toBe('[-1,0,1,2,6,10]');
  });

  test('one containing the only element', () => {
    const one = toListNode([-1, 2]);
    const two = toListNode([0]);

    expect(mergeTwoLists(one, two).toString()).toEqual('[-1,0,2]');
  });

  test('both containing one element => sort it ASK', () => {
    const one = new ListNode(-1);
    const two = new ListNode(0);

    expect(mergeTwoLists(one, two).toString()).toBe('[-1,0]');
  });
});

describe('NULLs', () => {
  it('returns NULL if both lists are NULLs', () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });

  it('returns first list if second list is null', () => {
    expect(mergeTwoLists(new ListNode(2), null).toString()).toEqual('[2]');
  });

  it('returns second list if first list is null', () => {
    expect(mergeTwoLists(null, new ListNode(3)).toString()).toBe('[3]');
  });
});
