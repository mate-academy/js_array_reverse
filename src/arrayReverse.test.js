'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

 it(`reverse array with one word`, () => {
    const name = ['Serhii'];
    expect(arrayReverse(name)).toEqual(['iihreS']);
  });

  it(`reverse array with a few words`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`array with numbers and special symbols`, () => {
    const words = ['123', '@!#'];
    expect(arrayReverse(words)).toEqual(['#!@', '321']);
  });
});
