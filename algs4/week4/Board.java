public class Board {
    private int[][] blocks;

    // dimension
    private int N;

    private int cachedHamming = -1;
    private int cachedManhattan = -1;

    // construct a board from an N-by-N array of blocks
    // (where blocks[i][j] = block in row i, column j)
    public Board(int[][] source) {
        N = source[0].length;
        blocks = new int[N][N];

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                this.blocks[i][j] = source[i][j];
            }
        }
    }

    // exchange blocks and return new blocks array
    private int[][] exch(int[][] initialBlocks, int i1, int j1, int i2, int j2) {
        int[][] blocksCopy = copy(initialBlocks);

        int temp = blocksCopy[i1][j1];
        blocksCopy[i1][j1] = blocksCopy[i2][j2];
        blocksCopy[i2][j2] = temp;

        return blocksCopy;
    }

    private int[][] copy(int[][] source) {
        int n = source[0].length;
        int[][] blocksCopy = new int[n][n];

        // copy incoming data
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                blocksCopy[i][j] = source[i][j];
            }
        }

        return blocksCopy;
    }

    // board dimension N
    public int dimension() {
        return N;
    }

    // number of blocks out of place
    public int hamming() {
        if (cachedHamming != -1) {
            return cachedHamming;
        }

        // result is equal -1 because of zero-element
        // is always out of it's position, but we count it
        int result = -1;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (blocks[i][j] != i * N + j + 1) {
                    result++;
                }
            }
        }

        cachedHamming = result;
        return result;
    }

    // sum of Manhattan distances between blocks and goal
    public int manhattan() {
        if (cachedManhattan != -1) {
            return cachedManhattan;
        }

        int result = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                int value = blocks[i][j];
                if (value == 0) {
                    continue;
                }

                value -= 1;
                int valueI = value / N;
                int valueJ = value % N;

                result += Math.abs(i - valueI) + Math.abs(j - valueJ);
            }
        }

        cachedManhattan = result;
        return result;
    }

    // is this board the goal board?
    public boolean isGoal() {
        return hamming() == 0;
    }

    // a board that is obtained by exchanging two adjacent blocks in the same row
    public Board twin() {
        Board board = null;

        for (int i = 0; i < N; i++) {
            if (board != null) {
                break;
            }

            for (int j = 0; j < N - 1; j++) {
                if (blocks[i][j] != 0 && blocks[i][j + 1] != 0) {
                    board = new Board(exch(blocks, i, j, i, j + 1));
                    break;
                }
            }
        }

        return board;
    }

    // does this board equal y?
    public boolean equals(Object y) {
        if (this == y) {
            return true;
        }

        if (y == null) {
            return false;
        }

        if (this.getClass() != y.getClass()) {
            return false;
        }

        Board that = (Board) y;

        if (this.dimension() != that.dimension()) {
            return false;
        }

        for (int i = 0; i < this.dimension(); i++) {
            for (int j = 0; j < this.dimension(); j++) {
                if (this.blocks[i][j] != that.blocks[i][j]) {
                    return false;
                }
            }
        }

        return true;
    }

    // all neighboring boards
    public Iterable<Board> neighbors() {
        int i0 = -1;
        int j0 = -1;

        Queue<Board> q = new Queue<Board>();

        // find zero element
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (blocks[i][j] == 0) {
                    i0 = i;
                    j0 = j;
                    break;
                }
            }

            if (i0 != -1) {
                break;
            }
        }

        if (i0 > 0) {
            q.enqueue(new Board(exch(blocks, i0, j0, i0 - 1, j0)));
        }

        if (i0 + 1 < N) {
            q.enqueue(new Board(exch(blocks, i0, j0, i0 + 1, j0)));
        }

        if (j0 > 0) {
            q.enqueue(new Board(exch(blocks, i0, j0, i0, j0 - 1)));
        }

        if (j0 + 1 < N) {
            q.enqueue(new Board(exch(blocks, i0, j0, i0, j0 + 1)));
        }

        return q;
    }

    // string representation of this board (in the output format specified below)
    public String toString() {
        StringBuilder s = new StringBuilder();

        s.append(N + "\n");

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                s.append(String.format("%2d ", blocks[i][j]));
            }
            s.append("\n");
        }

        return s.toString();
    }

    // unit tests (not graded)
    public static void main(String[] args) {

    }
}
