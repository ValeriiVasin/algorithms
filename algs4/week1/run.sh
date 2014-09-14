#!/bin/sh

# compile
javac *.java

# run section
echo "Quick Find:"
java QuickFindUF < $1
echo "\n"

echo "Quick Union:"
java QuickUnionUF < $1
echo "\n"

echo "Weighted Quick Union:"
java WeightedQuickUnionUF < $1
echo "\n"

# cleanup
rm *.class

# node
echo "Node results:"
node main $1
