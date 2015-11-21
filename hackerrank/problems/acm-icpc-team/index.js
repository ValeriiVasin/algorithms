'use strict'

// https://www.hackerrank.com/challenges/acm-icpc-team

import { read } from '../../lib/read';

const solve = (reader) => {
  const [N, M] = reader.readNumbers(2);

  // knowledges per person. Presented as string - numbers could not be handled by js.
  const knowledges = [];
  for (let i = 0; i < N; i++) {
    knowledges.push(reader.readLine());
  }

  let teamTopics = [];
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      teamTopics.push(
        amountOfTopics(combine(knowledges[i], knowledges[j]))
      );
    }
  }

  let maxTopics = 0;
  let teamsWithMaxTopics = 0;

  for (let amount of teamTopics) {
    if (amount === maxTopics) {
      teamsWithMaxTopics += 1;
      continue;
    }

    if (amount > maxTopics) {
      maxTopics = amount;
      teamsWithMaxTopics = 1;
    }
  }

  console.log(maxTopics);
  console.log(teamsWithMaxTopics);
};

/**
 * Amount of topics that person/team knows
 * @param  {Number} number Number that represent bits of topics
 * @return {Number}        Number of topics
 */
const amountOfTopics = (str) => {
  return str.replace(/0/g, '').length;
};

/**
 * Combine knowledges of person "a" and person "b"
 * @param  {String} a Person knowledges
 * @param  {String} b Person knowledges
 * @return {String}   Combined knowledges
 */
const combine = (a, b) => {
  let result = '';

  for (let i = 0, length = a.length; i < length; i++) {
    result += (a.charAt(i) === '1' || b.charAt(i) === '1') ? '1' : '0';
  }

  return result;
};

read().then(solve);
