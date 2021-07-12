'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an array [4 letters, 7 letters]
    if original array consists of [4 letters, 7 letters]`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an array [1 letter]
    if original array consists of [1 letter]`, () => {
    expect(arrayReverse(['M'])).toEqual(['M']);
  });

  it(`should return an array [1 digit, 2 digits, 2 digits]
    if original array consists of [1 digit, 2 digits,
       2 digits]`, () => {
    expect(arrayReverse(['1', '23', '45'])).toEqual(['5', '43', '21']);
  });

  it(`should return an array [1 spec. symb., 4 spec. symb., 3 spec. symb.]
    if original array consists of [1 digit, 2 digits,
       2 digits]`, () => {
    expect(arrayReverse(['!', '@##$', '&*('])).toEqual(['(', '*&$#', '#@!']);
  });
});
