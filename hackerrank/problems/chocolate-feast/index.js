'use strict'

// https://www.hackerrank.com/challenges/chocolate-feast

import { read } from '../../lib/read';

const solve = (reader) => {
  const T = reader.readNumber();

  for (let i = 0; i < T; i++) {
    let [money, price, exchange] = reader.readNumbers(3);

    // initial - bought in the shop
    let current = Math.floor(money / price);
    let total = current;

    while (current >= exchange) {
      let exchanged = Math.floor(current / exchange);
      current %= exchange;

      total += exchanged;
      current += exchanged;
    }

    console.log(total);
  }
};

read().then(solve);
