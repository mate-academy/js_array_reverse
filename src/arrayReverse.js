'use strict';

/**
 * @param {string[]} words
 *
 * @returns {string[]}
 */
function arrayReverse(words) {
  if (words.filter(word => typeof word !== 'string').length > 0) {
    throw new Error(`Elements of 'words' array must be strings`);
  }

  let start = 0;
  const whole = words.join('').split('').reverse().join('');

  for (let i = 0; i < words.length; i++) {
    words[i] = whole.slice(start, start + words[i].length);
    start += words[i].length;
  }

  return words;
}

module.exports = arrayReverse;
