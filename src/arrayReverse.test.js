'use strict';
/* eslint-disable no-console */

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {

  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

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
});
