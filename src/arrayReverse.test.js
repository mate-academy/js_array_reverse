'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(arrayReverse(['a']))).toBe(true);
  });

  it(`should correctly reverse a single string`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should correctly reverse multiple strings and preserve chunk sizes`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should work with single-character strings`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should handle empty array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should handle array with empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should work with numbers and special symbols inside strings`, () => {
    expect(arrayReverse(['a1!', 'B2@', '#c3']))
      .toEqual(['3c#', '@2B', '!1a']);
  });

  it(`should preserve total length of characters`, () => {
    const input = ['abc', 'de!f', 'G'];
    const result = arrayReverse(input);

    const inputLength = input.join('').length;
    const resultLength = result.join('').length;

    expect(resultLength).toBe(inputLength);
  });
});
