'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(arrayReverse(['Mate', 'Academy']))).toBe(true);
  });

  it(`should return an array with empty string
    if original array consists of an array with empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it('should return array with string in reversed order', () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });

  it(`should return array with strings in reversed order without changing words's length`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });
});
