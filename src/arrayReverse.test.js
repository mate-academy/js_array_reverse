'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse([]);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should return an array with each string reversed`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['', ''])).toEqual(['', '']);
  });

  it(`should return an array with each string reversed
    including digits`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should return an array with each string reversed
    including special characters`, () => {
    expect(arrayReverse(['Hell@'])).toEqual(['@lleH']);
  });

  it(`should return an array with each string reversed
    which contains more than 2 elements`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
