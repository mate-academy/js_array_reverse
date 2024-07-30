'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Abc'])).toBeInstanceOf(Array);
  });

  it(`should reverse the given strings
  of the original array consists of 2 value`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should reverse the given strings
  of the original array consists of 3 value with special symbols`, () => {
    expect(arrayReverse(['Hello', 'world', '!&*']))
      .toEqual(['*&!dl', 'rowol', 'leH']);
  });

  it(`should reverse the given strings
  of the original array consists of 2 value with numbers`, () => {
    expect(arrayReverse(['Hello12', '3world5']))
      .toEqual(['5dlrow3', '21olleH']);
  });

  it(`should reverse the given strings
  of the original array consists of 2 different length value`, () => {
    expect(arrayReverse(['Hello', 'woorrrld']))
      .toEqual(['dlrrr', 'oowolleH']);
  });

  it(`should reverse the given strings
  of the original array consists of 5 different length value`, () => {
    expect(arrayReverse(['He', 'does', 'not', 'eat', 'pineapple']))
      .toEqual(['el', 'ppae', 'nip', 'tae', 'tonseodeH']);
  });
  // write more tests here
});
