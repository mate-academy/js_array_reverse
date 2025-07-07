'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Mate', 'Academy']);
    expect(Array.isArray(result)).toBe(true);
  });

  it(`should reverse letters of all words as if they are one string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should handle an empty array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should handle an array with empty strings`, () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });

  it(`should handle an array with one empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should handle an array with one word`, () => {
    expect(arrayReverse(['hello'])).toEqual(['olleh']);
  });

  it(`should handle an array with words of different lengths`, () => {
    expect(arrayReverse(['abc', 'de', 'f'])).toEqual(['f', 'ed', 'cba']);
  });

  it(`should not mutate input array (optional test)`, () => {
    const input = ['abc', 'def'];
    const copy = [...input];
    arrayReverse(input);
    expect(input).toEqual(copy);
  });
});
