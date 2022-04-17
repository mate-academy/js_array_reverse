'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([]))
      .toBeInstanceOf(Array);
  });

  it(`should return array witn an empty string `
    + `if original array consists of an empty string`, () => {
    expect(arrayReverse(['']))
      .toEqual(['']);
  });

  it('should return reversed array', () => {
    expect(arrayReverse(['Hello']))
      .toEqual(['olleH']);
  });

  it(`should return array with two strings, `
    + `if original array consist of two strings`, () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']);
  });

  it(`should return array with not changed length of `
  + `the strings from the original array`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
