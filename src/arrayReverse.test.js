'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return [' '] if arrayReverse = [' ']`, () => {
    expect(arrayReverse([' '])).toEqual([' ']);
  });

  it(`should return array with 2 strings 
  if arrayReverse consist 2 strings`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return reserved array`, () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });

  it(`should return  array with the same lenght as arrayReverse`, () => {
    expect(arrayReverse(['My', 'name', 'is', 'Alina'])).toEqual(['an', 'ilAs', 'ie', 'manyM']);
  });
});
