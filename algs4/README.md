# Bash expansion

Place code below into `algs4.bash` and add `source $HOME/algs4.bash` in `.profile`

```bash
javac_algs4() {
  local path=$HOME/Projects/algorithms/algs4/
  javac -classpath ${path}stdlib.jar:${path}algs4.jar:. $@
}

java_algs4() {
  local path=$HOME/Projects/algorithms/algs4/
  java -classpath ${path}stdlib.jar:${path}algs4.jar:. $@
}

algs4() {
  local filename=$1

  # remove .java from the end to get classname
  local classname=${filename/.java}
  javac_algs4 $filename && java_algs4 $classname

  # cleanup
  rm $classname.class
}

export -f java_algs4
export -f javac_algs4
export -f algs4
```

# Sublime build system - algs4
```json
{
  "shell_cmd": "algs4 $file_name",
  "working_dir": "$filepath",
  "selector": "*.java",
  "shell": true
}
```
