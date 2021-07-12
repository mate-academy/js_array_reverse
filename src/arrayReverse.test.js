'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['hello'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return string
  if original array consists of 2  elements`, () => {
    expect(arrayReverse(['Hello', 'world'])).toEqual(['dlrow', 'olleH']);
  });

  it(`should return string
  if original array consists of 1  elements`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it(`should return string
  if original array consists of 1  elements with digits`, () => {
    expect(arrayReverse(['12345', '12345'])).toEqual(['54321', '54321']);
  });

  it(`should return string
  if original array consists of 5  elements`, () => {
    expect(arrayReverse(['How', 'are',
      'you', 'doing?'])).toEqual(['?gn', 'iod', 'uoy', 'erawoH']);
  });
});
