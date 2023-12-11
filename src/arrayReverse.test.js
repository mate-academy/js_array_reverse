'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Hello']);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    const result = arrayReverse(['']);

    expect(result).toEqual(['']);
  });

  it(`should reverse strings correctly`, () => {
    const result1 = arrayReverse(['Hell0']);

    expect(result1).toEqual(['0lleH']);

    const result2 = arrayReverse(['Mate', 'Academy']);

    expect(result2).toEqual(['ymed', 'acAetaM']);

    const result3 = arrayReverse(['I', 'am', 'a', 'student!']);

    expect(result3).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
