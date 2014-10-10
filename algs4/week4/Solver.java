import java.util.HashMap;
import java.util.Comparator;

public class Solver {
    private HashMap<String, Boolean> hash, twinHash;
    private MinPQ<Board> PQ, twinPQ;
    private Queue<Board> q;

    // compare points by slope
    private final Comparator<Board> CMP = new ManhattanComparator();

    private class ManhattanComparator implements Comparator<Board> {
        public int compare(Board a, Board b) {
            if (a == null || b == null) {
                throw new NullPointerException();
            }

            double manhattanA = a.manhattan();
            double manhattanB = b.manhattan();

            if (manhattanA == manhattanB) {
                return 0;
            }

            if (manhattanA > manhattanB) {
                return 1;
            }

            return -1;
        }
    }

    private boolean solvable = false;

    // find a solution to the initial board (using the A* algorithm)
    public Solver(Board initial) {
        int N = initial.dimension();

        hash = new HashMap<String, Boolean>(N * N);
        hash.put(initial.toString(), true);
        PQ = new MinPQ<Board>(CMP);
        q = new Queue<Board>();
        q.enqueue(initial);

        if (initial.isGoal()) {
          solvable = true;
          return;
        }

        Board twin = initial.twin();
        twinHash = new HashMap<String, Boolean>(N * N);
        twinHash.put(twin.toString(), true);
        twinPQ = new MinPQ<Board>(CMP);

        boolean solved = false;

        Board main = initial;
        while (!solved) {
          for (Board board : main.neighbors()) {
              if (!hash.containsKey(board.toString())) {
                  hash.put(board.toString(), true);
                  PQ.insert(board);
              }
          }

          main = PQ.delMin();
          q.enqueue(main);
          if (main.isGoal()) {
            solved = true;
            solvable = true;
          }

          for (Board board : twin.neighbors()) {
              if (!twinHash.containsKey(board.toString())) {
                  twinHash.put(board.toString(), true);
                  twinPQ.insert(board);
              }
          }

          twin = twinPQ.delMin();
          if (twin.isGoal()) {
            solved = true;
            solvable = false;
          }

        }

    }

    // is the initial board solvable?
    public boolean isSolvable() {
      return solvable;
    }

    // min number of moves to solve initial board; -1 if unsolvable
    public int moves() {

      if (isSolvable()) {

        // size - 1 because of initial size is also there
        return q.size() - 1;
      } else {
        return -1;
      }
    }

    // sequence of boards in a shortest solution; null if unsolvable
    public Iterable<Board> solution() {
      return q;
    }

    // solve a slider puzzle (given below)
    public static void main(String[] args) {
      // create initial board from file
      In in = new In(args[0]);
      int N = in.readInt();
      int[][] blocks = new int[N][N];
      for (int i = 0; i < N; i++)
          for (int j = 0; j < N; j++)
              blocks[i][j] = in.readInt();
      Board initial = new Board(blocks);

      // solve the puzzle
      Solver solver = new Solver(initial);

      // print solution to standard output
      if (!solver.isSolvable())
          StdOut.println("No solution possible");
      else {
          StdOut.println("Minimum number of moves = " + solver.moves());
          for (Board board : solver.solution())
              StdOut.println(board);
      }
    }
}
