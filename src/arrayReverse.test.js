'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Mate', 'Academy']);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  it(`should return an one string array if input is ['Hello']`, () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it(`should return an inverted array with 
  the same string length as the input`, () => {
    expect(arrayReverse(['Hello', '!!!!!!'])).toEqual(['!!!!!', '!olleH']);
  });

  it(`should return an inverted array with input
   string of numbers `, () => {
    expect(arrayReverse(['1234'])).toEqual(['4321']);
  });

  it(`should return an array with empty string with 
  the input array of numbers`, () => {
    expect(arrayReverse([1234])).toEqual(['']);
  });

  it(`should return ['..', '%h'] with input ['h%', '..']`, () => {
    expect(arrayReverse(['h%', '..'])).toEqual(['..', '%h']);
  });

});
