'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Eye'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['', 'Academy'])).toEqual(['', 'ymedacA']);
  });

  it(`should return same length of the strings from the original array`, () => {
    expect(arrayReverse(['Academy'])).toEqual(['ymedacA']);
  });

  it(`should return same register of letters from the original array`, () => {
    expect(arrayReverse(['Mate', 'AcaDemy'])).toEqual(['ymeD', 'acAetaM']);
  });

  it(`should return integers as letters from the original array`, () => {
    expect(arrayReverse(['Mate1', 'Academy2'])).toEqual(['2ymed', 'acA1etaM']);
  });

  it(`should return symbols as letters from the original array`, () => {
    expect(arrayReverse(['$Mate$', 'Acad#emy']))
      .toEqual(['yme#da', 'cA$etaM$']);
  });

  it(`should return space 
    if original array consists of space in the string`, () => {
    expect(arrayReverse(['Ma te', 'Ac ad emy']))
      .toEqual(['yme d', 'a cAet aM']);
  });
});
