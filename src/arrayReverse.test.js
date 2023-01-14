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
    const words = arrayReverse([]);

    expect(words)
      .toEqual([]);
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

  test('should throw an error if arguments are not array', () => {
    expect(() => {
      arrayReverse();
    }).toThrow();
  });
  // write more tests here
});
