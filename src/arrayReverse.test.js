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
   if the original array consists of an empty string`, () => {
    const result = arrayReverse(['', '']);

    expect(result).toEqual(['', '']);
  });

  it(`should reverse the strings in
   the array and maintain the same string length`, () => {
    const result = arrayReverse(['Hello', 'World', '54321']);

    expect(result).toEqual(['12345', 'dlroW', 'olleH']);
  });

  it(`should reverse strings with special symbols`, () => {
    const result = arrayReverse(['@#$%', 'Ab-Cd', '!@#$%^&*()']);

    expect(result).toEqual([')(*&', '^%$#@', '!dC-bA%$#@']);
  });

  it(`should handle an array with a single string correctly`, () => {
    const result = arrayReverse(['Hello']);

    expect(result).toEqual(['olleH']);
  });

  it(`should handle an array with no strings correctly`, () => {
    const result = arrayReverse([]);

    expect(result).toEqual([]);
  });
});
