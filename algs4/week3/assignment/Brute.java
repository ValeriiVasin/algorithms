public class Brute {
    private static boolean isCollinear(Point p, Point q, Point r, Point s) {
      return p.slopeTo(q) == p.slopeTo(r) && p.slopeTo(r) == p.slopeTo(s);
    }

    private static void output(int ip, int iq, int ir, int is, Point[] points, boolean[] drawnPoints, boolean[][] lines) {
      int[] arr = {ip, iq, ir, is};

      for (int i = 0; i < arr.length; i++) {
        int index = arr[i];
        Point point = points[ index ];


        // draw point
        if (!drawnPoints[index]) {
          drawnPoints[index] = true;
          point.draw();
        }

        // we always draw p -> {x} line; point <p> is always first
        if (i != 0) {
          int pIndex = arr[0];
          Point p = points[pIndex];

          // add line
          if (!lines[pIndex][index]) {
            lines[pIndex][index] = true;
            lines[index][pIndex] = true;
            p.drawTo(point);
          }
        }

        // stdout
        StdOut.print(point);
        if (i == arr.length - 1) {
          StdOut.println();
        } else {
          StdOut.print(" -> ");
        }
      }
    }

    public static void main(String[] args) {
      String inputFile = args[0];

      In file = new In(inputFile);

      int n = file.readInt();

      Point[] points = new Point[n];
      int i = 0;

      while (!file.isEmpty()) {
          int x = file.readInt();
          int y = file.readInt();

          points[i++] = new Point(x, y);
      }

      Insertion.sort(points);

      StdDraw.setXscale(0, 32768);
      StdDraw.setYscale(0, 32768);

      // points that has been drawn
      boolean[] drawnPoints = new boolean[n];
      // connections between lines
      boolean[][] lines = new boolean[n][n];

      for (int ip = 0; ip < points.length - 3; ip++) {
        Point p = points[ip];

        for (int iq = ip + 1; iq < points.length - 2; iq++) {
          Point q = points[iq];

          for (int ir = iq + 1; ir < points.length - 1; ir++) {
            Point r = points[ir];

            for (int is = ir + 1; is < points.length; is++) {
              Point s = points[is];

              if (isCollinear(p, q, r, s)) {
                output(ip, iq, ir, is, points, drawnPoints, lines);
              }
            }
          }
        }
      }

    }
}
