function arraySum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

function arrayProduct(arr) {
  return arr.reduce(function(a, b) {
    return a * b;
  });
}

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  if (!factorial[n]) {
    factorial[n] = n * factorial(n - 1);
  }

  return factorial[n];
}

function combinations(n, k) {
  return (factorial(n) / factorial(k)) / factorial(n - k);
}

module.exports = {
  arraySum: arraySum,
  arrayProduct: arrayProduct,
  factorial: factorial,
  combinations: combinations
};
