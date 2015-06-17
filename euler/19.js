/**
 * Could be solved with proper algorithm, but I am lazy ass
 * to calculate amount of days in the month of the year manually
 * and not to use language capabilities :)
 */
var date = new Date(1901, 0, 1);
var endDate = new Date(2000, 11, 31);
var count = 0;

while (date < endDate) {
  // check Monday
  if (date.getDay() === 0) {
    count++;
  }

  date.setMonth(date.getMonth() + 1);
}

console.log('Result: %d', count);
