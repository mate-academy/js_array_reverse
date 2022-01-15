'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['abc']))
      .toBeInstanceOf(Array);
  });

  it(`should return an array with empty string
      when original array consists of an empty string`, () => {
    expect(arrayReverse(['']))
      .toEqual(['']);
  });

  it(`should return an reverse array ['0lleH']
      when original array consists of ['Hell0']`, () => {
    expect(arrayReverse(['Hell0']))
      .toEqual(['0lleH']);
  });

  it(`should return an reverse array ['ymed', 'acAetaM~']
      when original array consists of ['~Mate', 'Academy']`, () => {
    expect(arrayReverse(['~Mate', 'Academy']))
      .toEqual(['ymeda', 'cAetaM~']);
  });

  it(`should return an reverse array ['!', 'tn', 'e', 'dutsamaI']
      when original array consists of ['I', 'am', 'a', 'student!']`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
