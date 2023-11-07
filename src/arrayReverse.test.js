'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['test'])).toBeInstanceOf(Array);
  });

  it(`should return an empty array
    if input consists empty array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return 'B'
  if array consist of 'B'`, () => {
    expect(arrayReverse(['B'])).toEqual(['B']);
  });

  it(`should return '8145'
  if array consist of '5418'`, () => {
    expect(arrayReverse(['5418'])).toEqual(['8145']);
  });

  it(`should return 'ceD', '321'
  if array consist of '123', 'Dec'`, () => {
    expect(arrayReverse(['123', 'Dec'])).toEqual(['ceD', '321']);
  });

  it(`should return 'ali', 'k', '9@#&'
  if array consist of '&#@', '9', 'kila'`, () => {
    expect(arrayReverse(['&#@', '9', 'kila']))
      .toEqual(['ali', 'k', '9@#&']);
  });
});
