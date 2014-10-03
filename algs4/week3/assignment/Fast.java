import java.util.Arrays;
public class Fast {

    private static Stack<CheckPoint> checkpoint;

    private static class CheckPoint {
      Point first, last;

      public CheckPoint(Point first, Point last) {
        this.first = first;
        this.last = last;
      }

      public boolean check(Point first, Point last) {
        return this.first.compareTo(first) == 0 && this.last.compareTo(last) == 0;
      }
    }

    // read points, sort, remove duplicates
    private static Point[] read(String filename) {
      In file = new In(filename);

      int n = file.readInt();
      Point[] points = new Point[n];

      int j = 0;
      while (!file.isEmpty()) {
        int x = file.readInt();
        int y = file.readInt();

        points[j++] = new Point(x, y);
      }

      return points;
    }

    private static String getSegment(Point[] points) {
      String s = "";

      for (int i = 0; i < points.length; i++) {
        s += points[i].toString();

        if (i != points.length - 1) {
          s += " -> ";
        }
      }

      return s;
    }

    private static boolean contains(Point first, Point last) {
      for (CheckPoint c:checkpoint) {
        if (c.check(first, last)) {
          return true;
        }
      }

      return false;
    }

    private static void output(Point p, Point[] points, int lastIndex, int count) {
      double slope = p.slopeTo(points[lastIndex]);

      int firstIndex = lastIndex - count + 1;
      Point[] sorted = new Point[count + 1];

      sorted[0] = p;
      int size  = 1;

      for (int i = firstIndex; i <= lastIndex; i++) {
        sorted[size++] = points[i];
      }

      Arrays.sort(sorted);

      Point pFirst = sorted[0];
      Point pLast  = sorted[sorted.length - 1];

      if (contains(pFirst, pLast)) {
        return;
      }

      checkpoint.push( new CheckPoint(pFirst, pLast) );

      for (int i = 0; i < sorted.length; i++) {
        StdOut.print(sorted[i]);
        StdOut.print(i == sorted.length - 1 ? "\n" : " -> ");
      }

      pFirst.drawTo(pLast);
    }

    public static void main(String[] args) {
      String filename = args[0];

      checkpoint = new Stack<CheckPoint>();

      Point[] points = read(filename);

      StdDraw.setXscale(0, 32768);
      StdDraw.setYscale(0, 32768);

      // draw all points
      for (int i = 0; i < points.length; i++) {
        points[i].draw();
      }

      if (points.length < 4) {
        return;
      }

      for (int i = 0; i < points.length; i++) {
        Point p = points[i];
        Point[] sortedBySlope = new Point[points.length - 1];
        int index = 0;

        // copy other points to sortedBySlope array
        for (int j = 0; j < points.length; j++) {

          if (j != i) {
            sortedBySlope[index++] = points[j];
          }
        }

        // sort by p-slope
        Arrays.sort(sortedBySlope, p.SLOPE_ORDER);

        // find segments with more than 3 points in a row with same slope
        int count = 1;

        for (int j = 1; j < sortedBySlope.length; j++) {
          if (p.slopeTo(sortedBySlope[j - 1]) == p.slopeTo(sortedBySlope[j])) {
            count++;
          } else {
            if (count >= 3) {
              output(p, sortedBySlope, j - 1, count);
            }

            // reset count
            count = 1;
          }
        }

        if (count >= 3) {
          output(p, sortedBySlope, sortedBySlope.length - 1, count);
        }
      }

    }
}
