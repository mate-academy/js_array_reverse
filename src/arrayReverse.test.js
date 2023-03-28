'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(Array.isArray(result))
      .toBe(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['']))
      .toEqual(['']);
  });

  it(`should return array of reversed strings with
  lenght as in original array`, () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']);
  });

  it(`should return array of reversed strings with
  lenght as in original array`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return array of reversed strings with
  lenght as in original array`, () => {
    expect(arrayReverse(['---', '++', '????', '!---!']))
      .toEqual(['!--', '-!', '????', '++---']);
  });
});
