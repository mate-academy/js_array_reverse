'use strict';

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

  // write more tests here
  it(`should keep original string lengths`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return empty array for empty input`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should work with single-character strings`, () => {
    expect(arrayReverse(['a', 'b', 'c']))
      .toEqual(['c', 'b', 'a']);
  });

  it(`should reverse a single string`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });
});
