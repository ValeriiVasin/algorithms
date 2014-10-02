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

      // sort
      Arrays.sort(points);

      // remove duplicates
      Point[] temp = new Point[n];
      int index = 0;
      temp[0] = points[0];
      for (int i = 1; i < n; i++) {

        // add if not equal to previously saved
        if (temp[index].compareTo(points[i]) != 0) {
          index++;
          temp[index] = points[i];
        }
      }

      points = new Point[index + 1];
      for (int i = 0; i <= index; i++) {
        points[i] = temp[i];
      }

      return points;
    }

    private static String getSegment(Point[] points) {
      StringBuilder s = new StringBuilder();

      for (int i = 0; i < points.length; i++) {
        s.append(points[i]);

        if (i != points.length - 1) {
          s.append(" -> ");
        }
      }

      return s.toString();
    }

    private static void output(Point p, Point[] points, int lastIndex, int count, Bag<String> segments) {
      Point[] arr = new Point[count + 1];

      arr[0] = p;
      int index = 1;

      for (int i = lastIndex - count + 1; i <= lastIndex; i++) {
        arr[index++] = points[i];
      }

      Arrays.sort(arr);

      Point pFirst = arr[0];
      Point pLast = arr[arr.length - 1];

      String segment = getSegment(arr);

      if (!contains(segments, segment)) {
        segments.add(segment);
        StdOut.println(segment);
        pFirst.drawTo(pLast);
      }
    }

    private static boolean contains(Bag<String> segments, String segment) {
      for (String seg:segments) {
        if (seg.equals(segment)) {
          return true;
        }
      }

      return false;
    }

    public static void main(String[] args) {
      String filename = args[0];
      Bag<String> segments = new Bag<String>();

      Point[] points = read(filename);

      StdDraw.setXscale(0, 32768);
      StdDraw.setYscale(0, 32768);

      // draw all points
      for (int i = 0; i < points.length; i++) {
        points[i].draw();
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
          if (p.slopeTo(sortedBySlope[j-1]) == p.slopeTo(sortedBySlope[j])) {
            count++;
          } else {
            if (count >= 3) {
              output(p, sortedBySlope, j - 1, count, segments);
            }

            // reset count
            count = 1;
          }
        }

        if (count >= 3) {
          output(p, sortedBySlope, sortedBySlope.length - 1, count, segments);
        }
      }

    }
}
