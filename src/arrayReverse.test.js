'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {});

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should reverse single word`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should reverse multiple words preserving lengths`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);

    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should handle words with numbers and special characters`, () => {
    expect(arrayReverse(['123', '!@#'])).toEqual(['#@!', '321']);
  });

  it(`should handle single-character words`, () => {
    expect(arrayReverse(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
  });

  it(`should handle empty strings inside array`, () => {
    expect(arrayReverse(['', 'abc', ''])).toEqual(['', 'cba', '']);
  });
});
