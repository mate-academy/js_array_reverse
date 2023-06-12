'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['ray', 'ray']);

    expect(result).toBeInstanceOf(Array);
  });

  it(`Should return an array equal to the length `
  + `of the original array`, () => {
    const words = ['hello', 'world', 'test'];
    const reversedWords = arrayReverse(words);

    expect(reversedWords.length).toBe(words.length);
  });

  it(`Should return an array with the first line reversed `, () => {
    const result = arrayReverse(['I', 'am', 'a', 'student!']);

    expect(result).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`Should return ampty array when imput data []`, () => {
    const result = arrayReverse([]);

    expect(result).toEqual([]);
  });

  it(`Should return an array with an inverted string`, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result).toEqual(['ymed', 'acAetaM']);
  });
});
