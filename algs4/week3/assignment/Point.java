import java.util.Comparator;

public class Point implements Comparable<Point> {

    // compare points by slope
    public final Comparator<Point> SLOPE_ORDER;

    private final int x;                              // x coordinate
    private final int y;                              // y coordinate

    private static class BySlope implements Comparator<Point> {
        Point p;

        public BySlope(Point p1) {
            p = p1;
        }

        public int compare(Point a, Point b) {
            double slopeA = p.slopeTo(a);
            double slopeB = p.slopeTo(b);

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

        SLOPE_ORDER = new BySlope(this);
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
        if (that.x == x && that.y == y) {
            return Double.NEGATIVE_INFINITY;
        }

        if (that.x == x) {
            return 0;
        }

        if (that.y == y) {
            return Double.POSITIVE_INFINITY;
        }

        return (double) (that.y - y) / (that.x - x);
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

    }
}
