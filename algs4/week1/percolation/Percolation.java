/**
 * http://algs4.cs.princeton.edu/code/
 */

public class Percolation {
  public boolean[] opened;
  private QuickUnionUF uf;

  private int n;

  // cache last cell value
  private int lastIndex;

  private int index(int i, int j) {
    return (i - 1) * n + (j - 1) + 1;
  }

  // create N-by-N grid, with all sites blocked
  public Percolation(int N) {

    // n + 2 is for virtual nodes
    // 0 - is for opened sites; otherwise - closed
    n = N;

    int last = n * n + 2;

    // array indexes starts from zero
    lastIndex = last - 1;

    uf = new QuickUnionUF(lastIndex + 1);

    opened = new boolean[lastIndex + 1];

    // set all to be blocked
    for (int i = 1; i < opened.length - 1; i += 1) {
      opened[i] = false;
    }
  }

  // open site (row i, column j) if it is not already
  public void open(int i, int j) {

    if ( isOpen(i, j) ) {
      return;
    }

    int id = index(i, j);
    opened[id] = true;

    // StdOut.println("index: [" + i + "][" + j + "]=" + id);

    // connect to top
    if (i == 1) {
      uf.union(id, 0);
    }

    // connect to bottom
    if ( i == n ) {
      uf.union(id, lastIndex);
    }

    // connect to neighbor
    if ( isOpen(i - 1, j) ) {
      uf.union(id, index(i - 1, j));
    }

    if ( isOpen(i + 1, j) ) {
      uf.union(id, index(i + 1, j));
    }

    if ( isOpen(i, j - 1) ) {
      uf.union(id, index(i, j - 1));
    }

    if ( isOpen(i, j + 1) ) {
      uf.union(id, index(i, j + 1));
    }
  }

  // is site (row i, column j) open?
  public boolean isOpen(int i, int j) {
    if ( i < 1 || i > n || j < 1 || j > n ) {
      return false;
    }

    return opened[ index(i, j) ];
  }

  // is site (row i, column j) full?
  public boolean isFull(int i, int j) {
    return isOpen(i, j) && uf.connected(0, index(i, j));
  }

  // does the system percolate?
  public boolean percolates() {
    return uf.connected(0, lastIndex);
  }

  public void debug() {
    StdOut.println("Opened:");

    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= n; j++) {
        StdOut.print(isOpen(i, j) ? " true; " : "false; ");
      }
      StdOut.println();
    }

    StdOut.println("Full:");
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= n; j++) {
        StdOut.print(isFull(i, j) ? " true; " : "false; ");
      }
      StdOut.println();
    }
  }

  public static void main(String[] args) {
    // Percolation p = new Percolation(3);

    // p.open(1, 1);
    // p.open(3, 1);
    // p.open(2, 1);
    // p.open(2, 2);
    // p.open(3, 3);

    // p.debug();
    // StdOut.print( p.percolates() );
  }
}
