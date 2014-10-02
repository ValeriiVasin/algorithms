import java.util.Arrays;
public class Fast {
    private static Bag<String> segments = new Bag<String>();

    private static int n;
    private static Point[] points;

    private static void read(String filename) {
      In file = new In(filename);

      n = file.readInt();
      points = new Point[n];

      int i = 0;
      while (!file.isEmpty()) {
        int x = file.readInt();
        int y = file.readInt();

        points[i++] = new Point(x, y);
      }
    }

    private static void output(Point p, Point[] points, int lastIndex, int count) {
      Point[] arr = new Point[count + 1];

      arr[0] = p;
      int index = 1;

      for (int i = lastIndex - count + 1; i <= lastIndex; i++) {
        arr[index++] = points[i];
      }

      Insertion.sort(arr);

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
      for (int i = 0; i < n; i++) {
        points[i].draw();
      }

      for (int i = 0; i < n - 3; i++) {
        Point p = points[i];

        Point[] sorted = new Point[n - 1];
        int index = 0;
        for (int j = 0; j < n; j++) {

          if (j != i) {
            sorted[index++] = points[j];
          }
        }

        Arrays.sort(sorted, p.SLOPE_ORDER);

        int count = 1;
        double previousSlopeTo = p.slopeTo(sorted[0]);
        double currentSlopeTo;
        for (int j = 1; j < sorted.length; j++) {
          currentSlopeTo = p.slopeTo(sorted[j]);

          if (currentSlopeTo == previousSlopeTo) {
            count++;
          } else {
            if (count >= 3) {
              output(p, sorted, j - 1, count);
            }
            count = 1;
          }

          previousSlopeTo = currentSlopeTo;
        }
      }

    }
}
