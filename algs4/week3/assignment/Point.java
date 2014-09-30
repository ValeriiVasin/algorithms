import java.util.Comparator;

public class Point implements Comparable<Point> {

    // compare points by slope
    public final Comparator<Point> SLOPE_ORDER;

    private final int x;                              // x coordinate
    private final int y;                              // y coordinate

    public static class BySlope implements Comparator<Point> {
        private Point p;

        public BySlope(int x, int y) {
            p = new Point(x, y);
        }

        public int compare(Point a, Point b) {
            double slopeA = a.slopeTo(p);
            double slopeB = b.slopeTo(b);

            if (slopeA == slopeB) {
                return 0;
            }

            if (slopeA > slopeB) {
                return 1;
            }

            return -1;
        }
    }

    // create the point (x, y)
    public Point(int x, int y) {
        /* DO NOT MODIFY */
        this.x = x;
        this.y = y;

        SLOPE_ORDER = new BySlope(x, y);
    }

    // plot this point to standard drawing
    public void draw() {
        /* DO NOT MODIFY */
        StdDraw.point(x, y);
    }

    // draw line between this point and that point to standard drawing
    public void drawTo(Point that) {
        /* DO NOT MODIFY */
        StdDraw.line(this.x, this.y, that.x, that.y);
    }

    // slope between this point and that point
    public double slopeTo(Point that) {
        /* YOUR CODE HERE */
        if (this.x == that.x && this.y == that.y) {
            return Double.NEGATIVE_INFINITY;
        }

        if (this.x == that.x) {
            return 0;
        }

        if (this.y == that.y) {
            return Double.POSITIVE_INFINITY;
        }


        return (that.y - this.y) / (that.x - this.x);
    }

    // is this point lexicographically smaller than that one?
    // comparing y-coordinates and breaking ties by x-coordinates
    public int compareTo(Point that) {
        /* YOUR CODE HERE */

        if (this.y < that.y) {
            return -1;
        }

        if (this.y > that.y) {
            return 1;
        }

        if (this.x < that.x) {
            return -1;
        }

        if (this.x > that.x) {
            return 1;
        }

        return 0;
    }

    // return string representation of this point
    public String toString() {
        /* DO NOT MODIFY */
        return "(" + x + ", " + y + ")";
    }

    // unit test
    public static void main(String[] args) {
        /* YOUR CODE HERE */
    }
}
