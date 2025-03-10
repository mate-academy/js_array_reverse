'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const word = ['hello'];
    const result = arrayReverse(word);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    const word = [''];
    const result = arrayReverse(word);

    expect(result).toEqual(['']);
  });

  it(`should return the same array if it length === 1`, () => {
    const word = ['o'];
    const result = arrayReverse(word);

    expect(result).toEqual(['o']);
  });

  it(`should work correctly with capital letters`, () => {
    const word = ['ooO', 'NiCe'];
    const reverseArray = ['eCi', 'NOoo'];
    const result = arrayReverse(word);

    expect(result).toEqual(reverseArray);
  });

  it(`should has the same length as original`, () => {
    const words = ['apple', '12banana', '@dog'];
    const result = arrayReverse(words);

    expect(result.length).toBe(words.length);
  });

  it(`should return the same length of string`, () => {
    const words = ['apple', '12banana', '@dog'];
    const result = arrayReverse(words);

    for (let i = 0; i < words.length; i++) {
      expect(words[i].length).toBe(result[i].length);
    }
  });

  it(`should return right reverse array with letters,
    numbers and special symbols`, () => {
    const words = ['apple', '12banana', '@dog'];
    const reverseArray = ['god@a', 'nanab21e', 'lppa'];
    const result = arrayReverse(words);

    expect(result).toEqual(reverseArray);
  });
});
