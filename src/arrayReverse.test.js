'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an empty array if original array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return the same array
    if original array consists of string with one character`, () => {
    expect(arrayReverse(['a'])).toEqual(['a']);
  });

  it(`should return reversed string
    if original array consists of one string`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it(`should return reversed string
    if original array consists of string with numbers`, () => {
    expect(arrayReverse(['H3ll0'])).toEqual(['0ll3H']);
  });

  it(`should return reversed string
    if original array consists of string with special symbols`, () => {
    expect(arrayReverse(['Good luck!'])).toEqual(['!kcul dooG']);
  });

  it(`should return reversed strings
    if original array consists of multiple strings`, () => {
    expect(
      arrayReverse([
        'How',
        'many',
        'shrimp',
        'do',
        'you',
        'have',
        'to',
        'eat',
        'before',
        'your',
        'skin',
        'starts',
        'to',
        'turn',
        'pink?',
      ])
    ).toEqual([
      '?kn',
      'ipnr',
      'utotst',
      'ra',
      'tsn',
      'iksr',
      'uo',
      'yer',
      'ofebta',
      'eote',
      'vahu',
      'oyodpm',
      'ir',
      'hsyn',
      'amwoH',
    ]);
  });
});
