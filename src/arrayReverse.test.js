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

  it(`should reverse the words`, () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });

  it(`should reverse the string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return the string reversed in the correct way `, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should preserve the length of each word`, () => {
    const initialArrary = ['Mate', 'Academy'];
    const reversedArray = arrayReverse(initialArrary);

    expect(initialArrary[0].length).toBe(reversedArray[0].length);
    expect(initialArrary[1].length).toBe(reversedArray[1].length);
  });

  it(`should return the same number of the words`, () => {
    const initialArrary = ['I', 'am', 'a', 'student!'];
    const reversedArray = arrayReverse(initialArrary);

    expect(initialArrary.length).toBe(reversedArray.length);
  });

  it(`should work with the numbers`, () => {
    expect(arrayReverse(['8889'])).toEqual(['9888']);
  });

  it(`should work with the special symbols`, () => {
    expect(arrayReverse(['!!!?'])).toEqual(['?!!!']);
  });
});
