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

  it(`should works with numbers and special symbols`, () => {
    expect(arrayReverse(['1234', '!@)}{]['])).toEqual(['[]{}', ')@!4321']);
  });

  it(`should reverses in the right order`, () => {
    expect(arrayReverse(['4', '44', '433', '3221']))
      .toEqual(['1', '22', '333', '4444']);
  });

  it(`should return ['0lleH']`, () => {
    const result = arrayReverse(['Hell0']);

    expect(result).toEqual(['0lleH']);
  });

  it(`should return ['ymed', 'acAetaM']`, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return ['!', 'tn', 'e', 'dutsamaI']`, () => {
    const result = arrayReverse(['I', 'am', 'a', 'student!']);

    expect(result).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
