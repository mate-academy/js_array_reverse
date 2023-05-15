'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should reverse single array parts`, () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });

  it(`should reverse multiple array parts`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should work with numbers`, () => {
    expect(arrayReverse(['Mate', 'Acade12'])).toEqual(['21ed', 'acAetaM']);
  });

  it(`should work with special characters`, () => {
    expect(arrayReverse(['Mate', 'Acade+='])).toEqual(['=+ed', 'acAetaM']);
  });

  it(`should not change length of array`, () => {
    const words = ['Mate', 'Academy'];
    const reversedWords = arrayReverse(words);

    expect(words.length).toEqual(reversedWords.length);
  });

  it(`should not change length of strings in array`, () => {
    const words = ['Mate', 'Academy'];
    const reversedWords = arrayReverse(words);

    expect(words[0].length).toEqual(reversedWords[0].length);
    expect(words[1].length).toEqual(reversedWords[1].length);
  });
});
