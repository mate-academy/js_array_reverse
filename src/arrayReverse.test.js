'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([''])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return a reverse string from
  original array if it contains two or more string-elements`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return a reverse string from
  original array if it contains only one string-element`, () => {
    expect(arrayReverse(['Walking'])).toEqual(['gniklaW']);
  });

  it(`should return the array where the length of the reversed 
  strings from the original array does not change`, () => {
    expect(arrayReverse(['Hi, ', 'guys'])).toEqual(['syug', ' ,iH']);
  });

  it(`should return a reverse string from
    original array if it contains digits`, () => {
    expect(arrayReverse(['123456']))
      .toEqual(['654321']);
  });

  it(`should return a reverse string elements from original
    array containing spaces`, () => {
    expect(arrayReverse(['It is test', 'array - 23']))
      .toEqual(['32 - yarra', 'tset si tI']);
  });

  // write more tests here
});
