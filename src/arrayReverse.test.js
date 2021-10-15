'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['qwe', 'rty']))
      .toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return reversed string and reversed order of string `, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return reversed string`, () => {
    expect(arrayReverse(['GROBUT!'])).toEqual(['!TUBORG']);
  });

  it(`should return a reverse array if it contains letters, 
    numbers and special characters`, () => {
    expect(arrayReverse(['Number', 'five', '>', 'than', '4']))
      .toEqual(['4naht>', 'evif', 'r', 'ebmu', 'N']);
  });

  it(`should return reversed string if it contains numbers`, () => {
    expect(arrayReverse(['13', '246'])).toEqual(['64', '231']);
  });

  it(`the length of the elements of the reverse array does not change`, () => {
    expect(arrayReverse(['123/4', 'abc', '?'])).toEqual(['?cba4', '/32', '1']);
  });
});
