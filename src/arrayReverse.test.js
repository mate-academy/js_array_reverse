'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate'])).toBeInstanceOf(Array);
  });

  it(`should return an empty array if the original array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an empty string if the original array consists of one`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should reverse a single string`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should reverse all characters and keep the original string lengths`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);

    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });

  it(`should reverse strings containing numbers and special symbols`, () => {
    expect(arrayReverse(['abc', '12', '#$%'])).toEqual(['%$#', '21', 'cba']);
  });

  it(`should keep empty strings in their original positions`, () => {
    expect(arrayReverse(['ab', '', 'Cde', ''])).toEqual(['ed', '', 'Cba', '']);
  });
});
