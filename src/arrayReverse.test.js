'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an array of reversed strings`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
    expect(arrayReverse(['Mate12', 'Academy'])).toEqual(['ymedac', 'A21etaM']);
    expect(arrayReverse(['Academy'])).toEqual(['ymedacA']);
  });

  it(`should return empty string for numbers`, () => {
    expect(arrayReverse([1234, 34567])).toEqual(['', '']);
  });

  it(`should return original array if array has one character`, () => {
    expect(arrayReverse(['A'])).toEqual(['A']);
  });
});
