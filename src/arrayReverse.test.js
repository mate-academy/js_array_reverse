'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['1'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return the array with reversed string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return the array where the length of the reversed 
  strings from the original array does not change`, () => {
    expect(arrayReverse(['Hi, ', 'guys'])).toEqual(['syug', ' ,iH']);
  });

  it(`should return an array with the first element equal to the last character 
  of the last line, if the length of the first line is 1`, () => {
    expect(arrayReverse(['I', 'am', 'here!'])).toEqual(['!', 'er', 'ehmaI']);
  });

  it(`should return the array with 1 string
  if input array includs 1 string`, () => {
    expect(arrayReverse(['Hello0'])).toEqual(['0olleH']);
  });
});
