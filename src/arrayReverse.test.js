'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(arrayReverse(['Mate', 'Academy']))).toBe(true);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an empty array if only empty array was provided`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should reverse an array consisting of one word`, () => {
    expect(arrayReverse(['Mate'])).toEqual(['etaM']);
  });

  it(`shoul reverse an array consisting of two words`, () => {
    expect(arrayReverse(['Frock', 'coat'])).toEqual(['taock', 'corF']);
  });

  it(`shoul reverse an array consisting of many words`, () => {
    expect(
      arrayReverse(['In', 'hell', 'I', 'will', 'be', 'in', 'good', 'company']))
      .toEqual(['yn', 'apmo', 'c', 'doog', 'ni', 'eb', 'lliw', 'IllehnI']);
  });

  it(`should preserve the length of every string`, () => {
    const input = ['Mate', 'Academy'];
    const reversed = arrayReverse(['Mate', 'Academy']);

    expect(reversed.map(str => str.length))
      .toEqual(input.map(str => str.length));
  });

  it(`should work with letters, numbers and special characters`, () => {
    expect(arrayReverse(['123', 'abcd', '(#$%&']))
      .toEqual(['&%$', '#(dc', 'ba321']);
  });
});
