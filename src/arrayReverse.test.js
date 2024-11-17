'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array of reversed worls`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an array of reversed worls including special symbols`, () => {
    expect(arrayReverse(['&Mate', 'Academy'])).toEqual(['ymeda', 'cAetaM&']);
  });

  it(`should return an array of reversed worls including special numbers`, () => {
    expect(arrayReverse(['8Mate', 'Academy'])).toEqual(['ymeda', 'cAetaM8']);
  });

  it(`the letngth of the strings should be the same as in original array`, () => {
    const arr = ['8Mate', 'Academy'];

    arrayReverse(arr);

    expect(arr[0].length).toBe(5);
    expect(arr[1].length).toBe(7);
  });
});
