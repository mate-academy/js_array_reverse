'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {

  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an array with same length
  as original array length`, () => {
    const arrLength = arrayReverse(['Mate', 'Academy']);

    expect(arrLength.length).toBe(2);
  });

  it(`should not change length of strings in array after reverse`, () => {
    const arrLength = arrayReverse(['Mate', 'Academy']);

    expect(arrLength[0].length).toBe(4);
  });

  it(`should return empty array if empty array used as an argument`, () => {
    const arrLength = arrayReverse([]);

    expect(arrLength).toEqual([]);
  });

  it(`should not change length of strings in array after reverse`, () => {
    expect(() => arrayReverse()).toThrow();
  });
});
