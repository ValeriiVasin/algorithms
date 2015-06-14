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

module.exports = {
  arraySum: arraySum,
  arrayProduct: arrayProduct
};
