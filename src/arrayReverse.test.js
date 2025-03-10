'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([''])).toBeInstanceOf(Array);
  });

  it(`should return an empty string`
    + `if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return array with same length`, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result.length).toBe(2);
  });

  it(`should return array with same elements length`, () => {
    const result = arrayReverse(['I', 'am', 'a', 'student!']);
    const expectedResult = ['!', 'tn', 'e', 'dutsamaI'];

    expect(result[0]).toBe(expectedResult[0]);
    expect(result[result.length - 1]).toBe(expectedResult[result.length - 1]);
  });

  it(`should return the same length array with same`
    + `length of elements with reversed 'chars'`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });
});
