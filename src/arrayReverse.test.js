'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an empty string`
    + `, if original array consists of an empty string`, () => {
    expect(arrayReverse(['', '', ''])).toEqual(['', '', '']);
  });

  it(`should correctly return a reversed array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should work properly`
    + ` with strings with numbers and special symbols`, () => {
    expect(
      arrayReverse(['M@te', 'Ac@demy', '!s', '@', 't2ach1ng', 'pl0384719ace'])
    )
      .toEqual(['eca9', '174830l', 'pg', 'n', '1hca2t@s', '!ymed@cAet@M']);
  });

  it(`should throw an error, if 'words' is not an array`, () => {
    expect(() => arrayReverse({})).toThrow();
    expect(() => arrayReverse(false)).toThrow();
    expect(() => arrayReverse(undefined)).toThrow();
    expect(() => arrayReverse(0)).toThrow();
    expect(() => arrayReverse('string')).toThrow();
    expect(() => arrayReverse(null)).toThrow();
  });

  it(`should throw an error`
    + `, if a 'word' inside in 'words' is not a string`, () => {
    expect(() => arrayReverse([1, 2, 3])).toThrow();
    expect(() => arrayReverse([false, true])).toThrow();
    expect(() => arrayReverse([undefined])).toThrow();
    expect(() => arrayReverse([null])).toThrow();
    expect(() => arrayReverse([{}, {}])).toThrow();
  });
});
