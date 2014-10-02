import java.util.Arrays;
public class Fast {
    private static Bag<String> segments = new Bag<String>();

    private static int n;
    private static Point[] points;

    // read points, sort, remove duplicates
    private static void read(String filename) {
      In file = new In(filename);

      n = file.readInt();
      points = new Point[n];

      int j = 0;
      while (!file.isEmpty()) {
        int x = file.readInt();
        int y = file.readInt();

        points[j++] = new Point(x, y);
      }

      // sort
      Arrays.sort(points);
      StdOut.println(points.length);

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

      StdOut.println(points.length);
    }

    private static void output(Point p, Point[] points, int lastIndex, int count) {
      Point[] arr = new Point[count + 1];

      arr[0] = p;
      int index = 1;

      for (int i = lastIndex - count + 1; i <= lastIndex; i++) {
        arr[index++] = points[i];
      }

      Merge.sort(arr);

      Point pFirst = arr[0];
      Point pLast = arr[arr.length - 1];

      StringBuilder s = new StringBuilder();
      for (int i = 0; i < arr.length; i++) {
        s.append(arr[i]);

        if (i != arr.length - 1) {
          s.append(" -> ");
        }
      }
      String path = s.toString();


      if (isUnique(path)) {
        StdOut.println(path);
        segments.add(path);
        pFirst.drawTo(pLast);
      }

    }

    private static boolean isUnique(String s) {
      for (String str:segments) {
        if (str.equals(s)) {
          return false;
        }
      }

      return true;
    }

    public static void main(String[] args) {
      String filename = args[0];
      read(filename);

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
        double previousSlopeTo = p.slopeTo(sortedBySlope[0]);
        double currentSlopeTo;
        for (int j = 1; j < sortedBySlope.length; j++) {
          currentSlopeTo = p.slopeTo(sortedBySlope[j]);

          if (currentSlopeTo == previousSlopeTo) {
            count++;
          } else {
            if (count >= 3) {
              output(p, sortedBySlope, j - 1, count);
            }

            // reset count
            count = 1;
          }

          previousSlopeTo = currentSlopeTo;
        }
      }

    }
}
