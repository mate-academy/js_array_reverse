'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['he'])).toBeInstanceOf(Array);
  });

  it(`should reverse a given string
    if original array consists of 2 elements`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should reverse a given string, consider conditions
  if original array: (['I', 'am', 'a', 'student!'])
  it should return: ['!', 'tn', 'e', 'dutsamaI']`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should reverse a given string
  if original array consists of 3 elements different length`, () => {
    // eslint-disable-next-line max-len
    expect(arrayReverse(['Where', 'Are', 'you'])).toEqual(['uoyer', 'Aer', 'ehW']);
  });

  it(`should reverse a given string
  if original array consists of 2 elements with number`, () => {
    expect(arrayReverse(['123', '4566'])).toEqual(['665', '4321']);
  });
});
