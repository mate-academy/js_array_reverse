'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should reverse array strings and does not change the length of the elements`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);

    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });
});
