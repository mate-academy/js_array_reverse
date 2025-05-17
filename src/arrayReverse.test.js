'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
    expect(arrayReverse(['hello'])).toBeInstanceOf(Array);
  });

  it(`should correctly reverse a single-element array`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it(`should correctly reverse and redistribute characters
    for ['I', 'am', 'a', 'student!']`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return an empty array for an empty input array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should handle arrays containing empty strings`, () => {
    expect(arrayReverse(['a', '', 'b'])).toEqual(['b', '', 'a']);
    expect(arrayReverse(['', 'abc', ''])).toEqual(['', 'cba', '']);
  });

  it(`should handle strings with special characters and numbers`, () => {
    expect(arrayReverse(['@1', 'test', '3$'])).toEqual(['$3', 'tset', '1@']);
  });
});
