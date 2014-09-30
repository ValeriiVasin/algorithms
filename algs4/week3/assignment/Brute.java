public class Brute {
    public static boolean isCollinear(Point p, Point q, Point r, Point s) {
      return p.slopeTo(q) == p.slopeTo(r) && p.slopeTo(r) == p.slopeTo(s);
    }

    public static void main(String[] args) {
      String inputFile = args[0];

      In file = new In(inputFile);

      int n = file.readInt();
      StdOut.println("Amount: " + n);

      Point[] points = new Point[n];
      int i = 0;

      while (!file.isEmpty()) {
          int x = file.readInt();
          int y = file.readInt();

          points[i++] = new Point(x, y);
      }

      for (int ip = 0; ip < points.length - 3; ip++) {
        Point p = points[ip];

        for (int iq = ip + 1; iq < points.length - 2; iq++) {
          Point q = points[iq];

          for (int ir = iq + 1; ir < points.length - 1; ir++) {
            Point r = points[ir];

            for (int is = ir + 1; is < points.length - 1; is++) {
              Point s = points[is];

              if (isCollinear(p, q, r, s)) {
                StdOut.print(
                  p.toString() + " -> " +
                  q.toString() + " -> " +
                  r.toString() + " -> " +
                  s.toString()
                );

                p.draw();
                q.draw();
                r.draw();
                s.draw();

                p.drawTo(q);
                p.drawTo(r);
                p.drawTo(s);

              }
            }
          }
        }
      }

    }
}
