'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([]))
      .toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['']))
      .toEqual(['']);
  });

  it('should return an empty array if empty array was passed', () => {
    expect(arrayReverse([]))
      .toEqual([]);
  });

  it('should return reversed string if original'
    + 'array consists of string with numbers', () => {
    expect(arrayReverse(['2D2R']))
      .toEqual(['R2D2']);
  });

  it('should return reversed string if original'
    + 'array consists of string with special symbols', () => {
    expect(arrayReverse(['№# - dff']))
      .toEqual(['ffd - #№']);
  });

  it('should return reversed strings in array '
    + 'if array with multiple strings was passed', () => {
    expect(arrayReverse(['Holly', 'guacamole', 'you', 'did', 'it!']))
      .toEqual(['!tidi', 'duoyeloma', 'cau', 'gyl', 'loH']);
  });
});
