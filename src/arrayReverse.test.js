'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Hell0']);

    expect(Array.isArray(result)).toEqual(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    const result = arrayReverse(['']);

    expect(result).toEqual(['']);
  });

  it('if the array has more than two words', () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result).toEqual(['ymed', 'acAetaM']);
  });

  it('if the array has words and single letters', () => {
    const result = arrayReverse(['I', 'am', 'a', 'student!']);

    expect(result).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
