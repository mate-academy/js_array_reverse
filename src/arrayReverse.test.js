'use strict';

describe('arrayReverse', () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty string if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should reverse letters in a single word`, () => {
    expect(arrayReverse(['abc'])).toEqual(['cba']);
  });

  it(`should reverse letters in multiple words`, () => {
    expect(arrayReverse(['abc', 'def'])).toEqual(['fed', 'cba']);
  });

  it(`should handle words of different lengths`, () => {
    expect(arrayReverse(['a', 'bc', 'def'])).toEqual(['f', 'ed', 'cba']);
  });

  it(`should handle array with empty strings in between`, () => {
    expect(arrayReverse(['a', '', 'bc'])).toEqual(['c', '', 'ba']);
  });

  it(`should handle array with all empty strings`, () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });

  it(`should handle single-character words`, () => {
    expect(arrayReverse(['x', 'y', 'z'])).toEqual(['z', 'y', 'x']);
  });

  it(`should reverse letters correctly in a single word containing numbers or symbols`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should reverse letters correctly across multiple words of different lengths`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should reverse letters correctly for a sentence with single-character words and punctuation`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });
});
