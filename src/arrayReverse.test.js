'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Array']);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['', ''])).toEqual(['', '']);
  });

  it(`should return reversed string`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should return reversed string and reversed order of string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return the same quantity of symbols in each string`, () => {
    expect(arrayReverse(['I', 'am', 'a',
      'student!'])).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return the same quantity of symbols in each string`, () => {
    expect(arrayReverse(['I', 'am', 'a',
      'student!'])).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return the reversed numbers in string`, () => {
    expect(arrayReverse(['1', '243'])).toEqual(['3', '421']);
  });
});
