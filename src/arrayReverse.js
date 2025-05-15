'use strict';

/* eslint-disable no-console */
/**
 * @param {string[]} words
 *
 * @returns {string[]}
 */
function arrayReverse(words) {
  let start = 0;

  const whole = words.join('').split('').reverse().join('');

  for (let i = 0; i < words.length; i++) {
    words[i] = whole.slice(start, start + words[i].length);
    start += words[i].length;
  }

  return words;
}

console.assert(JSON.stringify(arrayReverse(['Hell0']))
 === JSON.stringify(['0lleH']), 'Test 1 Failed');

console.assert(JSON.stringify(arrayReverse(['Mate', 'Academy']))
 === JSON.stringify(['ymed', 'acAetaM']), 'Test 2 Failed');

console.assert(JSON.stringify(arrayReverse(['I', 'am', 'a', 'student!']))
=== JSON.stringify(['!', 'tn', 'e', 'dutsamaI']), 'Test 3 Failed');

console.assert(JSON.stringify(arrayReverse(['a', 'b', 'c']))
 === JSON.stringify(['c', 'b', 'a']), 'Test 4 Failed');

console.assert(JSON.stringify(arrayReverse(['123', '!@#']))
  === JSON.stringify(['#@!', '321']), 'Test 5 Failed');

console.log('All tests passed!');

module.exports = arrayReverse;
