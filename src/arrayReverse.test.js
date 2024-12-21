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

  it(`should return reversed each string in
    the array witch correct number of characters`, () => {
    expect(arrayReverse(['How', 'are', 'you?']))
      .toEqual(['?uo', 'yer', 'awoH']);
  });

  it(`should return single reversed string`, () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });
});
