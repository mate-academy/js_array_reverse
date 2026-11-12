'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const input = ['Hello', 'World'];

    expect(Array.isArray(arrayReverse(input))).toBe(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  test('reverses characters and preserves original length', () => {
    const input = ['I', 'am', 'a', 'student!'];

    expect(arrayReverse(input)).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  test(`reverses one string with a digit
    and a special character as well`, () => {
    const input = ['Hell0!'];

    expect(arrayReverse(input)).toEqual(['!0lleH']);
  });

  test('reverses an empty string', () => {
    const input = [''];

    expect(arrayReverse(input)).toEqual(['']);
  });

  test('reverses an array with mixed empty and non-empty strings', () => {
    const input = ['koteł', '', 'pieseł'];

    expect(arrayReverse(input)).toEqual(['łesei', '', 'płetok']);
  });

  test('handles an empty array', () => {
    const input = [];

    expect(arrayReverse(input)).toEqual([]);
  });
});
