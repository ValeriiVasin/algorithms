public class PercolationStats {
  private double[] results;

  // perform T independent computational experiments on an N-by-N grid
  public PercolationStats(int N, int T) {
    if ( N < 0 || T < 0 ) {
      throw new IllegalArgumentException();
    }

    results = new double[T];
    for (int i = 0; i < T; i += 1) {

      // opened sites count
      int count = 0;
      Percolation p = new Percolation(N);
      boolean percolates = false;

      while ( !percolates ) {
        int rndI = 1 + StdRandom.uniform(N);
        int rndJ = 1 + StdRandom.uniform(N);

        if ( !p.isOpen(rndI, rndJ) ) {
          p.open(rndI, rndJ);
          percolates = p.percolates();
          count += 1;
        }
      }

      results[i] = (double) count / (N * N);
    }
  }

  // sample mean of percolation threshold
  public double mean() {
    return StdStats.mean(results);
  }

  // sample standard deviation of percolation threshold
  public double stddev(){
    return StdStats.stddev(results);
  }

  // returns lower bound of the 95% confidence interval
  public double confidenceLo() {
    return mean() - (1.96 * stddev()) / Math.sqrt(results.length);
  }

  // returns upper bound of the 95% confidence interval
  public double confidenceHi() {
    return mean() + (1.96 * stddev()) / Math.sqrt(results.length);
  }

  public static void main(String[] args) {
    int N = StdIn.readInt();
    int T = StdIn.readInt();

    PercolationStats ps = new PercolationStats(N, T);

    StdOut.println("mean = " + ps.mean());
    StdOut.println("stddev = " + ps.stddev());
    StdOut.println("95% confidence interval = " + ps.confidenceLo() + ", " + ps.confidenceHi());
  }
}
