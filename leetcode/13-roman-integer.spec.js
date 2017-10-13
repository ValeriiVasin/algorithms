const romanToInt = require('./13-roman-integer');

const testCases = {
  'XCIX': 99,
  'MCMIV': 1904,
  'MCMXC': 1990,
  'MMXIV': 2014,
  'MCMLIV': 1954,
  'CCVII': 207,
  'MLXVI': 1066,
  'DCXXI': 621,

  'IV': 4,
  'IX': 9,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900,
}

Object.keys(testCases).forEach(roman => {
  test(`case: ${roman} => ${testCases[roman]}`, () => {
    expect(romanToInt(roman)).toBe(testCases[roman]);
  });
});
