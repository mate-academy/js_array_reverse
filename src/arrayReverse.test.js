'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {});

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  test('reserves characters and preserves original length', () => {
    const input = ['Mate', 'Academy'];
    expect(arrayReverse(input)).toEqual(['ymed', 'acAetaM']);
  });

  test('reverses one string', () => {
    const input = ['Hell0'];
    expect(arrayReverse(input)).toEqual(['0lleH']);
  });

  test('reverses an empty string', () => {
    const input = [''];
    expect(arrayReverse(input)).toEqual(['']);
  });
});
