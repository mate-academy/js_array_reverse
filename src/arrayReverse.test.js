'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(Array.isArray(arrayReverse(['abc']))).toBe(true);
  });

  it(`should return an array with an empty string
  if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should reverse a single string`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it(`should reverse multiple strings and preserve their original lengths`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should reverse strings with numbers and special symbols`, () => {
    expect(arrayReverse(['a1', '#$'])).toEqual(['$#', '1a']);
  });

  it(`should reverse strings of different lengths`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });

  it(`should return an array with empty strings if original array consists of empty strings`, () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });

  it(`should preserve an empty string between non-empty strings`, () => {
    expect(arrayReverse(['ab', '', 'c'])).toEqual(['cb', '', 'a']);
  });
});
