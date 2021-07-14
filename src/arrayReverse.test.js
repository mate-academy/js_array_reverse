'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Good'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an array with reversed string
  if original array is not empty`, () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });

  it(`should return an array with the same number of reversed strings  
    as in original array`, () => {
    expect(arrayReverse(['Mate', 'Academy', 'Good']).length).toEqual(3);
  });

  it(`should return an array with reversed strings and their order in which 
  the length of the strings from the original array has not changed`, () => {
    expect(arrayReverse(['My', 'name', 'is', 'Vasyl'])).toEqual([
      'ly', 'saVs', 'ie', 'manyM']);
  });

  it(`should return an array with reversed strings 
    if original array contains special characters`, () => {
      expect(arrayReverse(['My@', 'name$', 'is#', 'Vasyl*'])).toEqual([
        '*ly', 'saV#s', 'i$e', 'man@yM']);
  });

  it(`should return an array with reversed strings 
  if original array contains numbers`, () => {
    expect(arrayReverse(['380', '44', '1234567'])).toEqual(
      ['765', '43', '2144083']);
  });
  // write more tests here
});
