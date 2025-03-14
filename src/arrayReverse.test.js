'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof arrayReverse(['Hell0'])).toBe('object');
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });
  it(`should reverse the given strings in the array
      and their order so that the length of the strings from the original array does not change`, () => {
      expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });
  it(`should return an empty array
    if original array is an empty array`, () => {
      expect(arrayReverse([])).toEqual([]);
  });
});
