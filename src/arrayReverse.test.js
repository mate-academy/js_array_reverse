'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Hell0']);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should reverse a single string`, () => {
    const result = arrayReverse(['Hell0']);

    expect(result).toEqual(['0lleH']);
  });

  it(`should reverse strings with the original length`, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an empty array if input array is empty`, () => {
    const result = arrayReverse([]);

    expect(result).toEqual([]);
  });

  it(`should reverse a single empty string correctly`, () => {
    const result = arrayReverse(['']);

    expect(result).toEqual(['']);
  });

  it('should reverse strings of different symbols', () => {
    const result = arrayReverse(['abc', '123', '!@#']);

    expect(result).toEqual(['#@!', '321', 'cba']);
});
});
