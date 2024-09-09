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

  it(`should return an empty array when the input array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should correctly reverse a string of length 1`, () => {
    expect(arrayReverse(['A'])).toEqual(['A']);
  });

  it(`should correctly reverse a string of length 2`, () => {
    expect(arrayReverse(['AB'])).toEqual(['BA']);
  });

  it(`should correctly reverse a string of length 4`, () => {
    expect(arrayReverse(['Test'])).toEqual(['tseT']);
  });

  it(`should correctly reverse a string of length 5`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it(`should correctly reverse a string of length 6`, () => {
    expect(arrayReverse(['Mateys'])).toEqual(['syetaM']);
  });

  it(`should handle an array with strings containing exactly
  one special character and one number in each string`, () => {
    expect(arrayReverse(['1a!', '2b@', '3c#'])).toEqual(['#c3', '@b2', '!a1']);
  });

  it(`should correctly reverse an array with single-character strings`, () => {
    expect(arrayReverse(['A', 'B', 'C'])).toEqual(['C', 'B', 'A']);
  });

  it(`should handle an array with identical strings`, () => {
    expect(arrayReverse(['abc', 'abc', 'abc'])).toEqual(['cba', 'cba', 'cba']);
  });
});
