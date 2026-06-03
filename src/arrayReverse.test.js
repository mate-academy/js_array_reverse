'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`returns an array`, () => {
    expect(arrayReverse([''])).toBeInstanceOf(Array);
  });

  it(`returns an empty string inside array for an empty string input`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`reverses characters in a single-word array`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it(`reverses and restructures multi-element arrays`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });

  it(`reverses and splits phrases correctly`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });
});
