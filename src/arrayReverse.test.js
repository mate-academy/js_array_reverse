'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`be declared`, () => {
    expect(arrayReverse)
      .toBeInstanceOf(Function);
  });

  it(`return an array`, () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toBeInstanceOf(Array);
  });

  it(`reverse sinle string`, () => {
    expect(arrayReverse(['Hell0']))
      .toEqual(['0lleH']);
  });

  it(`return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`reverse with correct length`, () => {
    expect(arrayReverse(['', 'am', 'a', 'student!']))
      .toEqual(['', '!t', 'n', 'edutsama']);
  });

  it(`reverse with correct letters case`, () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']);
  });
});
