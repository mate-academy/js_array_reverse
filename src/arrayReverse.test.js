'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['omg'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return reversed strings
    if original array consists of one string`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`should return reversed strings
  if original array consists of strings with different length`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return reversed strings
    if original array consists of an empty and non empty strings`, () => {
    expect(arrayReverse(['gmo', '', 'gmo'])).toEqual(['omg', '', 'omg']);
  });

  it(`should return three empty strings
    if original array consists of two empty strings by the sides`, () => {
    expect(arrayReverse(['', 'killme', ''])).toEqual(['', 'emllik', '']);
  });

  it(`should return an palindrom string
    if original array consists of palindrom string`, () => {
    expect(arrayReverse(['omg', 'gmo'])).toEqual(['omg', 'gmo']);
  });
});
