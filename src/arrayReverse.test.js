'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(arrayReverse(['first', 'array']))).toBe(true);
  });

  it(`should return an empty string
   if original array consists of an empty string`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should handle an array with an onechar word`, () => {
    expect(arrayReverse(['h'])).toEqual(['h']);
  });

  it(`should handle an array with a single word of chars`, () => {
    expect(arrayReverse(['hello'])).toEqual(['olleh']);
  });

  it(`should handle an array with a single word of numbers`, () => {
    expect(arrayReverse(['123'])).toEqual(['321']);
  });

  it(`should handle an array with a single word of special symbols`, () => {
    expect(arrayReverse(['+-!'])).toEqual(['!-+']);
  });

  it(`should handle an array with a single word of chars and numbers`, () => {
    expect(arrayReverse(['hell0'])).toEqual(['0lleh']);
  });

  it(`should handle an array with a single word of chars and special 
   chars`, () => {
    expect(arrayReverse(['hello!'])).toEqual(['!olleh']);
  });

  it(`should reverse the order of words with same length in the array`, () => {
    expect(arrayReverse(['hello', 'world'])).toEqual(['dlrow', 'olleh']);
  });

  it(`should handle an array with words of different lengths`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should handle an array with multiple words 
   of different lengths`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
