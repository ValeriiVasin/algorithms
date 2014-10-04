import java.util.Arrays;

public class Fast {

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

    private static void output(Point p, Point[] points, int lastIndex, int count) {
      int firstIndex = lastIndex - count + 1;

      // if p is not leftmost point of the line - do nothing
      // provided points are already sorted, because merge sort which
      // is used for sorting objects in Java is stable - after sorting
      // by slopes points with same slope are already in order
      if (p.compareTo(points[firstIndex]) >= 0) {
        return;
      }

      StdOut.print(p);
      for (int i = firstIndex; i <= lastIndex; i++) {
        StdOut.print(" -> " + points[i]);
      }
      StdOut.println();
      p.drawTo(points[lastIndex]);
    }

    public static void main(String[] args) {
      String filename = args[0];

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

      // sort points before start
      Arrays.sort(points);

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

        // check last segment
        if (count >= 3) {
          output(p, sortedBySlope, sortedBySlope.length - 1, count);
        }
      }

    }
}
