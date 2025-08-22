'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return a reverse array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy', '']))
    .toEqual(['ymed', 'acAetaM', '']);
  });

  it(`should return reverse array`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
    .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
