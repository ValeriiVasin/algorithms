/**
 * Tasks
 *
 *  - Implement the Spotify.Number object, that contains
 *  the function toString that spells out a number.
 *
 *  - Extend the unit testing object (Spotify.UnitTesting),
 *  implementing specific tests in charge of checking the
 *  functionality.
 *
 *  For example:
 *        99 --> ninety nine
 *       300 --> three hundred
 *       310 --> three hundred and ten
 *      1501 --> one thousand, five hundred and one
 *     12609 --> twelve thousand, six hundred and nine
 *    512607 --> five hundred and twelve thousand, six hundred and seven
 *
 *    Therefore:
 *      var number = new Spotify.Number(99);
 *      console.log(number) => 'ninety nine'
 *
 *      var testSuite = new Spotify.NumberTesting();
 *      testSuite.run();
 */

// Define the Spotify namespace
var Spotify = Spotify || {};

/******************************************************************************
 * @class Spotify.Number
 * @constructor
 */
Spotify.Number = function(number) {
    var dictionary = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'fourty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety'
    };

    if (number <= 20) {
      return dictionary[number];
    }

    var small = number % 10;
    var big = number - small;

    if (number < 100) {
      return small ? dictionary[big] + ' ' + dictionary[small] : dictionary[big];
    }

    if (number < 1000) {
      var hundreds = Math.floor(number / 100);
      var tens = number % 100;

      var result = dictionary[hundreds] + ' hundred';

      if (tens) {
        result += ' and ' + Spotify.Number(tens);
      }

      return result;
    }

    if (number < 1000000) {
      var thousands = Math.floor(number / 1000);
      var rest = number % 1000;

      var result = Spotify.Number(thousands) + ' thousand';
      if (rest) {
        result += ', ' + Spotify.Number(rest);
      }

      return result;
    }
};

/**
 * @method toString
 * @public
 */
Spotify.Number.prototype.toString = function() {
    // TODO: Implement the method that returns a string based on the value.
    // e.g. 99 => 'ninety nine'
};

/******************************************************************************
 * @class Spotify.UnitTesting
 * @constructor
 */
Spotify.UnitTesting = function() {
    this._passed = 0;
    this._failed = 0;
    this._result = 'Tests running: ';
};

/**
 * @param {Boolean} statement
 * @method assert
 * @public
 */
Spotify.UnitTesting.prototype.assert = function(statement) {
    if (statement) {
        this._passed++;
        this._result += '.';
    } else {
        this._failed++;
        this._result += 'F';
    }
};

/**
 * @method showResults
 * @public
 */
Spotify.UnitTesting.prototype.showResults = function() {
    console.log(this._result);
    console.log(this._passed + ' tests passed, ' + this._failed + ' failed');
};

/**
 * @method run
 * @public
 */
Spotify.UnitTesting.prototype.run = function() {

    this.assert(String(Spotify.Number(9)) === 'nine');
    this.assert(String(Spotify.Number(19)) === 'nineteen');
    this.assert(String(Spotify.Number(50)) === 'fifty');
    this.assert(String(Spotify.Number(21)) === 'twenty one');
    this.assert(String(Spotify.Number(100)) === 'one hundred');
    this.assert(String(Spotify.Number(300)) === 'three hundred');
    this.assert(String(Spotify.Number(310)) === 'three hundred and ten');
    this.assert(String(Spotify.Number(1000)) === 'one thousand');
    this.assert(String(Spotify.Number(1501)) === 'one thousand, five hundred and one');
    this.assert(String(Spotify.Number(12609)) === 'twelve thousand, six hundred and nine');
    this.assert(String(Spotify.Number(512607)) === 'five hundred and twelve thousand, six hundred and seven');

    // Note: in your specific implementation, you must call to showResults
    this.showResults();
};

/******************************************************************************
 * @class Spotify.UnitTesting
 * @constructor
 */

// TODO: Implement number testing object
// Example of one of the tests;
// var number = new Spotify.Number(99);
// this.assert(number == 'ninety nine');

// ****************************************************************************
// Execute the test suite
var suite = new Spotify.UnitTesting();

suite.run();
