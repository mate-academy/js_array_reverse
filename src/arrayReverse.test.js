'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Hello', 'world!']);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['', 'Mate', '', 'Academy']))
      .toEqual(['', 'ymed', '', 'acAetaM']);
  });

  it(`should return an inverted array`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should return an inverted array preserving the length`
    + `and order of the elements of the original array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an inverted array preserving the length and order of
    elements including special characters from the original array`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
