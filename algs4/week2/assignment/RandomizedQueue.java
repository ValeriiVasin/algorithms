import java.util.Iterator;
import java.util.NoSuchElementException;

public class RandomizedQueue<Item> implements Iterable<Item> {
  private Item[] q;            // queue elements
  private int N = 0;           // number of elements on queue

  // construct an empty randomized queue
  public RandomizedQueue() {
    q = (Item[]) new Object[2];
  }

  // is the queue empty?
  public boolean isEmpty() {
    return N == 0;
  }

  // return the number of items on the queue
  public int size() {
    return N;
  }

  // resize the underlying array
  private void resize(int max) {
    Item[] temp = (Item[]) new Object[max];
    for (int i = 0; i < N; i++) {
        temp[i] = q[i];
    }
    q = temp;
  }

  // add the item
  public void enqueue(Item item) {
    if (item == null) {
      throw new NullPointerException();
    }

    if (N == q.length) {
      resize(N * 2);
    }

    q[N] = item;
    N += 1;
  }

  // delete and return a random item
  public Item dequeue() {
    if (isEmpty()) {
      throw new NoSuchElementException();
    }

    int index = StdRandom.uniform(N);
    Item item = q[index];

    N -= 1;
    q[index] = q[N];
    q[N] = null;

    if (N > 0 && N == q.length/4) {
      resize(q.length/2);
    }

    return item;
  }

  // return (but do not delete) a random item
  public Item sample() {
    if (isEmpty()) {
      throw new NoSuchElementException();
    }

    return q[ StdRandom.uniform(N) ];
  }

  // return an independent iterator over items in random order
  /**
   * Returns an iterator that iterates over the items in this queue in FIFO order.
   * @return an iterator that iterates over the items in this queue in FIFO order
   */
  public Iterator<Item> iterator() {
      return new ArrayIterator();
  }

  // an iterator, doesn't implement remove() since it's optional
  private class ArrayIterator implements Iterator<Item> {
    private int i = 0;
    private Item[] _q;

    public ArrayIterator() {
      _q = (Item[]) new Object[N];

      for (int i = 0; i < N; i += 1) {
        _q[i] = q[i];
      }

      StdRandom.shuffle(_q);
    }

    public boolean hasNext() {
      return i < N;
    }

    public void remove() {
      throw new UnsupportedOperationException();
    }

    public Item next() {
        if (!hasNext()) {
          throw new NoSuchElementException();
        }

        Item item = _q[i];
        i++;

        return item;
    }
  }

  public static void main(String[] args) {
    RandomizedQueue<Integer> q = new RandomizedQueue<Integer>();

    q.enqueue(5);
    q.enqueue(10);
    q.enqueue(15);
    q.enqueue(20);

    for (int i:q) {
      StdOut.print(i + "; ");
    }

    StdOut.println();
    for (int i:q) {
      StdOut.print(i + "; ");
    }

    StdOut.println("size: " + q.size());
    StdOut.println( q.dequeue() );
    StdOut.println( q.dequeue() );
    StdOut.println( q.dequeue() );

    StdOut.println("Sample: " + q.sample());
    StdOut.println("size: " + q.size());

    for (int i:q) {
      StdOut.print(i + "; ");
    }

    StdOut.println(q.dequeue());
    StdOut.println("Size: " + q.size());
  }
}
