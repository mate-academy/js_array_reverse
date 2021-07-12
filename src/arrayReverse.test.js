'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
  if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an array with reversed string
  if original array consists of one string`, () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });

  it(`should return an reversed array of strings
  with first string one character long`, () => {
    expect(arrayReverse(['o', 'create', 'adaM']))
      .toEqual(['M', 'adaeta', 'erco']);
  });

  it(`should return an reversed array of strings
  ['ymed', 'acAetaM'] for original array ['Mate', 'Academy']`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an reversed array of strings with numbers
  ['123', '4567890'] for original array ['098', '7654321']`, () => {
    expect(arrayReverse(['098', '7654321'])).toEqual(['123', '4567890']);
  });

  it(`should return an reversed array of strings with special symbols
  ['#$-+', '&!'] for original array ['!&+-', '$#']`, () => {
    expect(arrayReverse(['!&+-', '$#'])).toEqual(['#$-+', '&!']);
  });
});
