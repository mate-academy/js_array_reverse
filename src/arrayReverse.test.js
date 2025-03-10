'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Hello', 'Hey'])).toEqual(['yeHol', 'leH']);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy', '']))
      .toEqual(['ymed', 'acAetaM', '']);
  });

  it(`should reverse strings with different lengths`, () => {
    expect(arrayReverse([' ', 'sun', 'smile', 'funny']))
      .toEqual(['y', 'nnu', 'felim', 'snus ']);
  });

  it(`should handle an array with a single empty string`, () => {
    expect(arrayReverse([' ', ' '])).toEqual([' ', ' ']);
  });

  it('should handle an empty array', () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it('should handle special characters', () => {
    expect(arrayReverse(['&($', ')^%$#'])).toEqual(['#$%', '^)$(&']);
  });
});
