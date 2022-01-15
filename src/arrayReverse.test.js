'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(['Mate'])).toBe(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return one string reversed unsliced
    if original array consits of one string`, () => {
    expect(arrayReverse(['hello'])).toEqual(['olleh']);
  });

  it(`should return array with reversed strings
    sliced if original array consists of strings of different length`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return array with reversed strings
    unsliced if original array consists of strings of the same length`, () => {
    expect(arrayReverse(['Hello', 'Holla']))
      .toEqual(['alloH', 'olleH']);
  });
});
