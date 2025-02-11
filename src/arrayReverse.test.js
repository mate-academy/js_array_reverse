'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should reverse single string
    if original array consists of only one string`, () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });

  it(`should reverse With numbers`, () => {
    expect(arrayReverse(['1Mate0'])).toEqual(['0etaM1']);
  });

  it(`should keep empty string when reversing the other`, () => {
    expect(arrayReverse(['Mate', ''])).toEqual(['etaM', '']);
  });

  it(`should return multiple empty strings
    if original array consists of only empty strings`, () => {
    expect(arrayReverse(['', ''])).toEqual(['', '']);
  });

  it(`should reverse multiple strings`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should reverse all four strings`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should reverse special chars`, () => {
    expect(arrayReverse(['@#', '$%^', '&*()', '-_=+!?']))
      .toEqual(['?!', '+=_', '-)(*', '&^%$#@']);
  });
});
