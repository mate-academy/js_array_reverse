'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(arrayReverse(['Hello']))).toBe(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should handle empty array', () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it('should handle array with single empty string', () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it('should handle array with multiple empty strings', () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });

  it('should handle array with special characters and numbers', () => {
    expect(arrayReverse(['H@ll0', 'W0Rld!'])).toEqual(['!dlR0', 'W0ll@H']);
  });

  it('should handle array with spaces in strings', () => {
    expect(arrayReverse(['Hello  ', '  World!']))
      .toEqual(['!dlroW ', '   olleH']);
  });

  it('should handle array with single characters strings', () => {
    expect(arrayReverse(['a', 's', 'd'])).toEqual(['d', 's', 'a']);
  });

  it('should handle long strings', () => {
    const longString = 'ab'.repeat(1000);
    const reversedString = 'ba'.repeat(1000);

    expect(arrayReverse([longString])).toEqual([reversedString]);
  });
});
