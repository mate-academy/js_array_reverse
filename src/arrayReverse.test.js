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

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Ilya1991!'])).toEqual(['!1991aylI']);
  });

  it('should reverse words and their order in an'
    + 'array with multiple elements', () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual(
      ['!', 'tn', 'e', 'dutsamaI']);
  });

  it('should handle an array with different characters and lengths', () => {
    expect(arrayReverse(['123', 'abc', '!@#'])).toEqual(['#@!', 'cba', '321']);
  });

  it('should handle an array with a mix of letters, digits,'
    + 'and special characters', () => {
    expect(arrayReverse(['a1b2c3', 'd4e5f6', '!@#$%^'])).toEqual(
      ['^%$#@!', '6f5e4d', '3c2b1a']);
  });

  it('should handle an empty array', () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it('should handle an array with a single empty string', () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it('should handle an array with multiple empty strings', () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });
});
