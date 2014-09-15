#!/bin/sh

# Example
# ./run.sh input.txt

# compile and run
# Notice: somehow `javac_algs4 *.java` compiles only first found class
for file in *.java; do
  javac_algs4 $file

  # remove .java from the end to get classname
  classname=${file/.java}

  echo $classname
  echo "====="
  java_algs4 $classname < $1
  echo "\n"
done

# cleanup
rm *.class

# node
echo "Node results:"
node main $1
