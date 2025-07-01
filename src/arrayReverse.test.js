'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toBeInstanceOf(Array);
  });

  it(`should return an arr with empty string inside
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an arr with strings
    with an original length `, () => {
    expect(arrayReverse(['Mate', 'Academy'])[0].length).toBe(4);
    expect(arrayReverse(['Mate', 'Academy'])[1].length).toBe(7);
  });

  it(`Function should reverse the given strings in the array and their order `
    + 'so that the length of the strings from the original array does '
    + 'not change', () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);

    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`function should reverse single string and then reverse the `
    + 'order of the array', () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });
});
