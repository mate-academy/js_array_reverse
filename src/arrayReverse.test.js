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

  // write more tests here
  it('should handle an empty array', () => {
    const result = arrayReverse([]);

    expect(result).toEqual([]);
  });

  it('should handle with array with single empty string', () => {
    const result = arrayReverse(['']);

    expect(result).toEqual(['']);
  });

  it('should handle with array with some empty strings', () => {
    const result = arrayReverse(['', '', '', '']);

    expect(result).toEqual(['', '', '', '']);
  });

  it('should reverse a single string in the array', () => {
    const result = arrayReverse(['World']);

    expect(result).toEqual(['dlroW']);
  });

  it('should reverse a array with some strings different length', () => {
    const result = arrayReverse(['My', 'name', 'is', 'Dmytro']);

    expect(result).toEqual(['or', 'tymD', 'si', 'emanyM']);
  });

  it('should handle with special characters strings', () => {
    const result = arrayReverse(['@#$', '!*&', '/|%^']);

    expect(result).toEqual(['^%|', '/&*', '!$#@']);
  });
});
