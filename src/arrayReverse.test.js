'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['test']);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should return an empty array when the input array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an array with empty strings`, () => {
    expect(arrayReverse(['', ''])).toEqual(['', '']);
  });

  it(`should reverse a single word`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it(`should handle an array with special characters`, () => {
    expect(arrayReverse(['@test!', '#example$', '%special^']))
      .toEqual(['^laice', 'ps%$elpma', 'xe#!tset@']);
  });

  it(`should handle an array with 1 special symbol`, () => {
    expect(arrayReverse(['string!', '@123', 'hi#']))
      .toEqual(['#ih321@', '!gni', 'rts']);
  });

  it(`should return an array with reversed strings of varying lengths`, () => {
    expect(arrayReverse(['short', 'longer', 'longest']))
      .toEqual(['tsegn', 'olregn', 'oltrohs']);
  });

  it(`should handle an array with identical strings`, () => {
    expect(arrayReverse(['abc', 'abc', 'abc'])).toEqual(['cba', 'cba', 'cba']);
  });
});
