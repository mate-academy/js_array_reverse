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

  // write more tests here
  it(`should reverse each string and their order in the array`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should handle single-letter strings`, () => {
    expect(arrayReverse(['A', 'B', 'C'])).toEqual(['C', 'B', 'A']);
  });

  it(`should reverse a special symbols`, () => {
    expect(arrayReverse(['!@', '#$%^'])).toEqual(['^%', '$#@!']);
  });

  it('should handle array with special characters and numbers', () => {
    expect(arrayReverse(['H@ll0', 'W0Rld!'])).toEqual(['!dlR0', 'W0ll@H']);
  });

  it(`should return a reversed string even if only one word is present`, () => {
    expect(arrayReverse(['student!'])).toEqual(['!tneduts']);
  });

  it('should reverse words', () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
