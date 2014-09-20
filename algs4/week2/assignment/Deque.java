import java.util.Iterator;
import java.util.NoSuchElementException;

public class Deque<Item> implements Iterable<Item> {
    private int N;          // size of the queue
    private Node first;     // top of queue
    private Node last;      // end of queue

    // helper linked list class
    private class Node {
        private Item item;
        private Node next;
        private Node prev;
    }

    /**
     * Initializes an empty stack.
     */
    public Deque() {
        first = null;
        last = null;
        N = 0;
    }

    /**
     * Is this stack empty?
     * @return true if this stack is empty; false otherwise
     */
    public boolean isEmpty() {
        return N == 0;
    }

    /**
     * Returns the number of items in the stack.
     * @return the number of items in the stack
     */
    public int size() {
        return N;
    }

    /**
     * Adds the item to this stack.
     * @param item the item to add
     */
    public void addFirst(Item item) {
        if (item == null) {
            throw new NullPointerException();
        }

        N += 1;

        if (N == 1) {
            first = last = new Node();
            first.item = item;
            return;
        }

        Node _first = first;
        first = new Node();
        first.item = item;
        first.prev = null;
        first.next = _first;
        _first.prev = first;
    }

    public void addLast(Item item) {
        if (item == null) {
            throw new NullPointerException();
        }

        N += 1;

        if (N == 1) {
            first = last = new Node();
            first.item = item;
            return;
        }

        Node _last = last;
        last = new Node();
        last.item = item;
        last.next = null;
        last.prev = _last;
        _last.next = last;
    }

    public Item removeFirst() {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }

        Item item = first.item;
        N -= 1;

        if (N == 0) {
            // we are removing last element
            first = last = null;
        } else {
            first = first.next;
            first.prev = null;
        }

        return item;
    }

    public Item removeLast() {
        if (isEmpty()) {
            throw new NoSuchElementException();
        }

        Item item = last.item;
        N -= 1;

        if (N == 0) {
            // we are removing last element
            first = last = null;
        } else {
            last = last.prev;
            last.next = null;
        }

        return item;
    }

    /**
     * Returns an iterator to this stack that iterates through the items in LIFO order.
     * @return an iterator to this stack that iterates through the items in LIFO order.
     */
    public Iterator<Item> iterator()  { return new ListIterator();  }

    // an iterator, doesn't implement remove() since it's optional
    private class ListIterator implements Iterator<Item> {
        private Node current = first;
        public boolean hasNext()  {
            return current != null;
        }
        public void remove() {
            throw new UnsupportedOperationException();
        }

        public Item next() {
            if (!hasNext()) throw new NoSuchElementException();
            Item item = current.item;
            current = current.next;
            return item;
        }
    }

    public static void main(String[] args) {
        Deque<String> deque = new Deque<String>();
        deque.addLast("10");
        deque.addLast("7");
        deque.addFirst("15");

        for (String item : deque) {
            StdOut.println(item);
        }
    }
}
