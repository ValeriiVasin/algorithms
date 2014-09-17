/**
 * http://algs4.cs.princeton.edu/code/
 */

public class Percolation {
  private boolean[] opened;
  private WeightedQuickUnionUF uf;

  private int n;

  // cache last cell value
  private int lastIndex;

  // create N-by-N grid, with all sites blocked
  public Percolation(int N) {
    if (N <= 0) {
      throw new IllegalArgumentException();
    }

    // n + 2 is for virtual nodes
    // 0 - is for opened sites; otherwise - closed
    n = N;

    int last = n * n + 2;

    // array indexes starts from zero
    lastIndex = last - 1;

    uf = new WeightedQuickUnionUF(lastIndex + 1);

    opened = new boolean[lastIndex + 1];

    // set all to be blocked
    for (int i = 1; i < opened.length - 1; i += 1) {
      opened[i] = false;
    }
  }

  private int index(int i, int j) {
    return (i - 1) * n + (j - 1) + 1;
  }

  private void checkIndices(int i, int j) {
    if (i < 1 || i > n || j < 1 || j > n) {
      throw new IndexOutOfBoundsException();
    }
  }

  // open site (row i, column j) if it is not already
  public void open(int i, int j) {
    checkIndices(i, j);

    if (isOpen(i, j)) {
      return;
    }

    int id = index(i, j);
    opened[id] = true;

    // connect to top
    if (i == 1) {
      uf.union(id, 0);
    }

    // connect to bottom
    if (i == n) {
      uf.union(id, lastIndex);
    }

    // connect to neighbor
    if (i > 1 && isOpen(i - 1, j)) {
      uf.union(id, index(i - 1, j));
    }

    if (i < n && isOpen(i + 1, j)) {
      uf.union(id, index(i + 1, j));
    }

    if (j > 1 && isOpen(i, j - 1)) {
      uf.union(id, index(i, j - 1));
    }

    if (j < n && isOpen(i, j + 1)) {
      uf.union(id, index(i, j + 1));
    }
  }

  // is site (row i, column j) open?
  public boolean isOpen(int i, int j) {
    checkIndices(i, j);

    return opened[ index(i, j) ];
  }

  // is site (row i, column j) full?
  public boolean isFull(int i, int j) {
    checkIndices(i, j);
    return isOpen(i, j) && uf.connected(0, index(i, j));
  }

  // does the system percolate?
  public boolean percolates() {
    return uf.connected(0, lastIndex);
  }

  public static void main(String[] args) {
  }
}
