'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const ipArray = ip.split('.');
  const arrayWithNumbers = ipArray.map(item => +item);
  arrayWithNumbers[0] = arrayWithNumbers[0] << 8 << 8 << 8;
  arrayWithNumbers[1] = arrayWithNumbers[1] << 8 << 8;
  arrayWithNumbers[2] <<= 8;
  const sumOfElements = arrayWithNumbers.reduce((sum, current) => sum + current, 0);
  return sumOfElements;
};

module.exports = { ipToInt };
