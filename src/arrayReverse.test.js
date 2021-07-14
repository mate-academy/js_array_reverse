'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['qwerty'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an array of strings 
  with length equal to the length of strings in inputted array`, () => {
    // eslint-disable-next-line
    expect(arrayReverse(['I', 'want', 'an', 'offer'])).toEqual(['r', 'effo', 'na', 'tnawI']);
  });

  it(`should return an array of reversed strings
  if strings contain different types of symbols`, () => {
    // eslint-disable-next-line
    expect(arrayReverse(['!!@@', '1234', 'Mate'])).toEqual(['etaM', '4321', '@@!!']);
  });
});
