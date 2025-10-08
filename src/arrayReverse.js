'use strict';

/**
 * @param {string[]} words
 *
 * @returns {string[]}
 */
function arrayReverse(words) {
  if (!Array.isArray(words)) {
    return [];
  }

  const all = words.join('').split('').reverse().join('');
  const result = [];
  let start = 0;

  for (let i = 0; i < words.length; i++) {
    const len = words[i].length;

    result.push(all.slice(start, start + len));
    start += len;
  }

  return result;
}

module.exports = arrayReverse;
