'use strict';

/**
 * @param {Array} words
 *
 * @returns {Array}
 */
function arrayReverse(words) {
  if (!Array.isArray(words)) {
    return [];
  }

  return words.map((el) => {
    if (typeof el === 'string') {
      return el.split('').reverse().join('');
    }

    if (typeof el === 'number') {
      return parseInt(el.toString().split('').reverse().join(''), 10);
    }

    return el;
  });
}

module.exports = arrayReverse;
