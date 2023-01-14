'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  test(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    const reverseWord = arrayReverse([]);

    expect(reverseWord)
      .toBeInstanceOf(Array);
  });

  test(`should return an empty string
    if original array consists of an empty string`, () => {
    const words = arrayReverse(['']);

    expect(words)
      .toEqual(['']);
  });

  test(`should return an reversed string`, () => {
    const reverseWord = arrayReverse(['Hello']);

    expect(reverseWord)
      .toEqual(['olleH']);
  });

  test(`should return reversed string
   so that the length of the strings from
   the original array does not change`, () => {
    const reverseWord = arrayReverse(['Hello', 'friends']);

    expect(reverseWord)
      .toEqual(['sdnei', 'rfolleH']);
  });

  test(`should return the same string 
    if the length of the argument equal 1`, () => {
    const reverseWord = arrayReverse(['b']);

    expect(reverseWord)
      .toEqual(['b']);
  });

  test(`should return a reversed string of numbers`, () => {
    const reverseWord = arrayReverse(['123', '456']);

    expect(reverseWord)
      .toEqual(['654', '321']);
  });

  test(`should return a reversed string of numbers
  so that the length of the strings from
  the original array does not change`, () => {
    const reverseWord = arrayReverse(['123', '45']);

    expect(reverseWord)
      .toEqual(['543', '21']);
  });

  test(`should return a reversed string of special symbols`, () => {
    const reverseWord = arrayReverse(['!@#$%']);

    expect(reverseWord)
      .toEqual(['%$#@!']);
  });

  test(`should return a reversed string of special symbols
  so that the length of the strings from
  the original array does not change`, () => {
    const reverseWord = arrayReverse(['!@#$', '*&']);

    expect(reverseWord)
      .toEqual(['&*$#', '@!']);
  });

  test(`should return a reversed string that
  consists of Latin letters, numbers and special symbols 
  so that the length of the strings from
  the original array does not change`, () => {
    const reverseWord = arrayReverse(['Hello', '123', '@']);

    expect(reverseWord)
      .toEqual(['@321o', 'lle', 'H']);
  });

  test(`should throw an error if arguments are not array`, () => {
    expect(() => {
      arrayReverse();
    }).toThrow();
  });
  // write more tests here
});
