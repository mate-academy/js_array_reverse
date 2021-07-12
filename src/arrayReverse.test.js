'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {

  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Hi', 'awesome', 'world'])).toEqual(
      ['dl', 'rowemos', 'ewaiH']);
  });

  it(`should return an empty string
  if original array consists of an empty string`, () => {
    expect(arrayReverse(['98', '765'])).toEqual(['56', '789']);
  });

  it(`should return an empty string
  if original array consists of an empty string`, () => {
    expect(arrayReverse(['SumMer'])).toEqual(['reMmuS']);
  });

  it(`should return an empty string
  if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an empty string
  if original array consists of an empty string`, () => {
    expect(arrayReverse(['hello', ''])).toEqual(['olleh', '']);
  });

  it(`should return an empty string
  if original array consists of an empty string`, () => {
    expect(arrayReverse(['h1', 'w0rld', '!@#'])).toEqual(
      ['#@', '!dlr0', 'w1h']);
  });
});
