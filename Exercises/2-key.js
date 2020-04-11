'use strict';

const generateKey = (length, possible) => {
  const base = possible.length;
  let result = '';
  for (let i = 0; i < length; i += 1) {
    const index = Math.floor(Math.random() * base);
    result += possible[index];
  }
  return result;
};

module.exports = { generateKey };
