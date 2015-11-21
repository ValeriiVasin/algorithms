'use strict'

// https://www.hackerrank.com/challenges/taum-and-bday

import { read } from '../../lib/read';
import { BigInt } from '../../lib/bigint';

const solve = (reader) => {
  const T = reader.readNumber();

  for (let i = 0; i < T; i++) {
    const [black, white] = reader.readNumbers(2);
    let [blackPrice, whitePrice, convertPrice] = reader.readNumbers(3);

    blackPrice = Math.min(blackPrice, whitePrice + convertPrice);
    whitePrice = Math.min(whitePrice, blackPrice + convertPrice);

    // console.log(`black: price - ${blackPrice}; amount: ${black}`);
    // console.log(`white: price - ${whitePrice}; amount: ${white}`)

    console.log(
      BigInt.from(blackPrice).multiply(black).add(
        BigInt.from(whitePrice).multiply(white)
      ).toString()
    );
  }
};

read().then(solve);
