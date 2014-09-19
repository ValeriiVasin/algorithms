var selection = require('../../../sort/selection');

var step = 1;
selection([30, 10, 86, 26, 49, 13, 20, 67, 12, 39], function (arr) {
  console.log('after step: %d:', step++, arr.join(' '));
});
