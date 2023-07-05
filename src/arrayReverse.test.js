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

  it(`should return an array equal to the length `
  + `of the original array`, () => {
    const words = ['hello', 'world', 'test'];
    const reversedWords = arrayReverse(words);

    expect(reversedWords.length).toBe(words.length);
  });

  it(`should return an array with reverse string`, () => {
    const result = arrayReverse(['Hell0']);

    expect(result).toEqual(['0lleH']);
  });

  it(`should return the same length of first string`
  + `in massive after reverse`, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result[0].length).toEqual(4);
  });

  it(`should works with symbols and numbers`, () => {
    const result = arrayReverse(['I', 'am', 'a', '1student!']);

    expect(result).toEqual(['!', 'tn', 'e', 'duts1amaI']);
  });
});
