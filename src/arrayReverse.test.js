'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  test(`should be declared as a function`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    const input = ['Hello', 'World'];

    expect(Array.isArray(arrayReverse(input))).toBe(true);
  });

  test('should return an empty array for empty input', () => {
    const input = [];

    expect(arrayReverse(input)).toEqual([]);
  });

  test(`should reverse an array containing an empty string`, () => {
    const input = [''];

    expect(arrayReverse(input)).toEqual(['']);
  });

  test('should reverse multiple strings of different lengths', () => {
    const input = ['Mate', 'Academy'];

    expect(arrayReverse(input)).toEqual(['ymed', 'acAetaM']);
  });

  test('should reverse characters and preserve original lengths', () => {
    const input = ['I', 'am', 'a', 'student!'];

    expect(arrayReverse(input)).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  test(`should reverse a string with a digit and a special character`, () => {
    const input = ['Hell0!'];

    expect(arrayReverse(input)).toEqual(['!0lleH']);
  });

  test('should reverse an array with mixed empty and non-empty strings', () => {
    const input = ['koteł', '', 'pieseł'];

    expect(arrayReverse(input)).toEqual(['łesei', '', 'płetok']);
  });
});
