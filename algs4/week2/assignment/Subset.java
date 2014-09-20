public class Subset {
  public static void main(String[] args) {
    RandomizedQueue<String> q = new RandomizedQueue<String>();

    int N = Integer.parseInt(args[0]);

    while (!StdIn.isEmpty()) {
      q.enqueue(StdIn.readString());
    }

    for (int i = 0; i < N; i++) {
      StdOut.println(q.dequeue());
    }
  }
}
