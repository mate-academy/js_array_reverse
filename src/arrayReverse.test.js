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

  it(`should return an array of strings 
  staying the same length as in the inputted array but being reversed
    Example: 
    ['I', 'am', 'a', 'student!'] --> ['!', 'tn', 'e', 'dutsamaI'] `, () => {
    // eslint-disable-next-line
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return an array of reversed strings
  regardless of type of data in the strings`, () => {
    // eslint-disable-next-line
    expect(arrayReverse(['123', '@!', 'England', 'London'])).toEqual(['nod', 'no', 'Ldnalgn', 'E!@321']);
  });
});
