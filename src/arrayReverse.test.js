'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Hello'])).toBeInstanceOf(Array);
  });

  it('return ["!dlro", "wolle", "H"] if'
    + 'input = ["Hello", "world", "!"]', () => {
    const params = ['Hello', 'world', '!'];
    const response = ['!dlro', 'wolle', 'H'];

    expect(arrayReverse(params)).toEqual(response);
  });

  it('should work with symbols and numbers', () => {
    const params = ['1234', '!@#$', '09)(', '87*&'];
    const response = ['&*78', '()90', '$#@!', '4321'];

    expect(arrayReverse(params)).toEqual(response);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should return empty array', () => {
    expect(arrayReverse([''])).toEqual([ '' ]);
  });

  it('should work correctly with very long string', () => {
    const params = [
      'Messi',
      'is',
      'the',
      'best',
      'football',
      'player',
      'in',
      'the',
      'world',
      'ever',
    ];

    const response = [
      'reved',
      'lr',
      'owe',
      'htni',
      'reyalpll',
      'abtoof',
      'ts',
      'ebe',
      'htsii',
      'sseM',
    ];

    expect(arrayReverse(params)).toEqual(response);
  });
});
