'use strict';

/**
 * @param {string[]} words
 *
 * @returns {string[]}
 */
function arrayReverse(words) {
  const concatStr = words
    .slice()
    .reverse()
    .map(word => word.split('').reverse().join(''))
    .join('');
  const result = [];
  let index = 0;

  for (let i = 0; i < words.length; i++) {
    const len = words[i].length;

    result.push(concatStr.slice(index, index + len));
    index += len;
  }

  return result;
}

module.exports = arrayReverse;
