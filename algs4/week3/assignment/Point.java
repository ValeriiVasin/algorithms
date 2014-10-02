import java.util.Comparator;

public class Point implements Comparable<Point> {

    // compare points by slope
    public final Comparator<Point> SLOPE_ORDER = new BySlope();

    private final int x;                              // x coordinate
    private final int y;                              // y coordinate

    private class BySlope implements Comparator<Point> {
        public int compare(Point a, Point b) {
            if (a == null || b == null) {
                throw new NullPointerException();
            }

            double slopeA = Point.this.slopeTo(a);
            double slopeB = Point.this.slopeTo(b);

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
    }

    public void draw() {
        StdDraw.setPenColor(255, 0, 0);
        StdDraw.filledCircle(x, y, 256);
    }

    public void drawTo(Point that) {
        StdDraw.setPenColor(0, 0, 0);
        StdDraw.line(x, y, that.x, that.y);
    }

    // slope between this point and that point
    public double slopeTo(Point that) {
        if (that == null) {
            throw new NullPointerException();
        }

        if (that.x == x && that.y == y) {
            return Double.NEGATIVE_INFINITY;
        }

        if (that.x == x) {
            return Double.POSITIVE_INFINITY;
        }

        if (that.y == y) {
            return 0;
        }

        return (double) (that.y - y) / (that.x - x);
    }

    // is this point lexicographically smaller than that one?
    // comparing y-coordinates and breaking ties by x-coordinates
    public int compareTo(Point that) {
        if (that == null) {
            throw new NullPointerException();
        }

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
