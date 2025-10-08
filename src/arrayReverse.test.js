'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['abc']);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should reverse one single word correctly`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should reverse all strings and their order correctly`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });

  it(`should return an empty array if input array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return [''] if input array contains an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should handle numbers and special characters as normal symbols`, () => {
    expect(arrayReverse(['123', '!@#'])).toEqual(['#@!', '321']);
  });

  it(`should not mutate the original array`, () => {
    const words = ['abc', 'def'];
    const result = arrayReverse(words);

    expect(result).toEqual(['fed', 'cba']);
  });

  it(`should preserve the length of each string after reversing`, () => {
    const input = ['Hi', 'there', '123'];
    const result = arrayReverse(input);

    expect(result.map((str) => str.length)).toEqual(
      input.map((str) => str.length)
    );
  });
});
