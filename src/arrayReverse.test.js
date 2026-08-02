'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`returns an array`, () => {
    expect(arrayReverse([''])).toBeInstanceOf(Array);
  });

  it(`handles empty input array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`handles single empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`reverses single string with numbers`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`reverses single string with special symbols`, () => {
    expect(arrayReverse(['a!b@c'])).toEqual(['c@b!a']);
  });

  it(`reverses and redistributes multi-element arrays`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`reverses and restructures multi-element arrays with mixed lengths`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual([
      '!',
      'tn',
      'e',
      'dutsamaI',
    ]);
  });

  it(`handles asymmetric lengths correctly`, () => {
    expect(arrayReverse(['abcde', 'x'])).toEqual(['xedcb', 'a']);
  });
});
