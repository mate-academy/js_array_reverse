'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should handle an empty array`, () => {
    const result = arrayReverse([]);

    expect(result).toEqual([]);
  });

  it('should reverse a single string in the array', () => {
    const result = arrayReverse(['Hell0']);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(['0lleH']);
  });

  it('should reverse multiple strings in the array', () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result).toEqual(['ymed', 'acAetaM']);
  });

  it('should reverse strings with varying lengths and keep the order', () => {
    const result = arrayReverse(['I', 'am', 'a', 'student!']);

    expect(result).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it('should handle strings with special characters and numbers', () => {
    const result = arrayReverse(['@#$%', '123', 'Hello']);

    expect(result).toEqual(['olle', 'H32', '1%$#@']);
  });

  it('should handle strings with spaces', () => {
    const result = arrayReverse(['Hello World']);

    expect(result).toEqual(['dlroW olleH']);
  });

  it(`should return an empty string
     if original array consists of an empty string`, () => {
    const result = arrayReverse(['']);

    expect(Array.isArray(result)).toBe(true);
    expect(arrayReverse([''])).toEqual(['']);
  });
});
