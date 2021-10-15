'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an array length (2)
    of the same length as the original array (2)`, () => {
    expect(arrayReverse(['I', 'am'])).toEqual(['m', 'aI']);
  });

  it(`the length of the array elements [1, 2, 7]
    remains unchanged after reversal [1, 2, 7]`, () => {
    expect(arrayReverse(['I', 'am', 'Legend!']))
      .toEqual(['!', 'dn', 'egeLmaI']);
  });

  it(`should return an array with elements reversed`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });
});
