public class Solver {
    private MinPQ<Step> PQ, twinPQ;
    private Stack<Board> stack;

    private class Step implements Comparable<Step> {
      private Board board;
      private Step prev;
      private int priority;
      private int moves;

      public Step(Board b, int m, Step s) {
          moves = m;
          board = b;
          priority = moves + board.manhattan();
          prev = s;
      }

      public int getMoves() {
        return moves;
      }

      public Step getPrev() {
        return prev;
      }

      public Board getBoard() {
        return board;
      }

      public int compareTo(Step that) {
          if      (priority < that.priority) return -1;
          else if (priority > that.priority) return +1;
          else                               return  0;
      }

      public String toString() {
        return "priority: " + priority + "; moves: " + moves + "\n" + board;
      }
    }

    private boolean solvable = false;

    // find a solution to the initial board (using the A* algorithm)
    public Solver(Board initial) {
        PQ = new MinPQ<Step>();
        twinPQ = new MinPQ<Step>();

        PQ.insert(new Step(initial, 0, null));
        twinPQ.insert(new Step(initial.twin(), 0, null));

        Step min = PQ.delMin();
        Step minTwin = twinPQ.delMin();

        while (!min.getBoard().isGoal() && !minTwin.getBoard().isGoal()) {

          for (Board board : min.getBoard().neighbors()) {
              if (min.getPrev() != null && board.equals(min.getPrev().getBoard())) {
                  continue;
              }

              PQ.insert(new Step(board, min.getMoves() + 1, min));
          }

          for (Board board : minTwin.getBoard().neighbors()) {
              if (minTwin.getPrev() != null && board.equals(minTwin.getPrev().getBoard())) {
                  continue;
              }

              twinPQ.insert(new Step(board, minTwin.getMoves() + 1, minTwin));
          }

          min     = PQ.delMin();
          minTwin = twinPQ.delMin();
        }

        if (!min.board.isGoal()) {
            solvable = false;
            return;
        }

        solvable = true;
        stack = new Stack<Board>();

        while (min != null) {
            stack.push(min.getBoard());
            min = min.getPrev();
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
        return stack.size() - 1;
      } else {
        return -1;
      }
    }

    // sequence of boards in a shortest solution; null if unsolvable
    public Iterable<Board> solution() {
      if (isSolvable()) {
        return stack;
      } else {
        return null;
      }
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
