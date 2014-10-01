public class Fast {
    private static void output(Point p, Point[] points, int lastIndex, int count) {
      Point[] arr = new Point[count + 1];

      arr[0] = p;
      int index = 1;

      for (int i = lastIndex - count + 1; i <= lastIndex; i++) {
        arr[index++] = points[i];
      }

      Insertion.sort(arr);

      for (int i = 0; i < arr.length; i++) {
        StdOut.print(arr[i]);

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

      StdDraw.setXscale(0, 32768);
      StdDraw.setYscale(0, 32768);

      for (i = 0; i < n; i++) {
        Point p = points[i];

        Point[] sorted = new Point[n - 1];
        int index = 0;
        for (int j = 0; j < n; j++) {

          if (j != i) {
            sorted[index++] = points[j];
          }
        }

        java.util.Arrays.sort(sorted, p.SLOPE_ORDER);

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
