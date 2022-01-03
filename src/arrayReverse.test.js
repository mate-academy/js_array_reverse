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
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return the empty strings
    if original array consists of empty strings`, () => {
    expect(arrayReverse(['', ''])).toEqual(['', '']);
  });

  it(`should return an empty string first if the //
      original array contains an empty string as the first element`, () => {
    expect(arrayReverse(['', 'Mate'])).toEqual(['', 'etaM']);
  });

  it(`should return '0lleH' if the given string is 'Hell0'`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should return ['ymed', 'acAetaM'] if the //
      given strings is ['Mate', 'Academy']`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return ['!', 'tn', 'e', 'dutsamaI'] if the //
      given strings is ['I', 'am', 'a', 'student!']`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual(['!', //
      'tn', 'e', 'dutsamaI']);
  });
});
