'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(arrayReverse(['Hell0']))).toBe(true);
  });

  it(`should return an empty string if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should reverse one string in array`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should reverse strings and their order`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should keep original strings lengths after reverse`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });

  it(`should work with numbers and special symbols`, () => {
    expect(arrayReverse(['12', '@#$%', 'abc'])).toEqual(['cb', 'a%$#', '@21']);
  });

  it(`should work with multiple empty strings`, () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });

  it(`should not change array length`, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result.length).toBe(2);
  });
});
