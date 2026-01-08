'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it('should return the same string if it consists of one character', () => {
    expect(arrayReverse(['a'])).toEqual(['a']);
  });

  it(`should return reversed string
    if the original array consists of one word`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should return reversed string
      if original array consists of string with numbers`, () => {
    expect(arrayReverse(['h311o'])).toEqual(['o113h']);
  });

  it(`should return reversed string
      if original array consists of string with special symbols`, () => {
    expect(arrayReverse(['h@llo!'])).toEqual(['!oll@h']);
  });

  it(`should return array with reversed words
      if original array consists of several words`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);

    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
