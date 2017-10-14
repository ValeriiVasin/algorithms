function findComplement(number) {
  const binary = number.toString(2);

  let complement = '';
  for (const char of binary) {
    complement += char === '0' ? '1' : '0';
  }

  return parseInt(complement, 2);
}

module.exports = findComplement;
