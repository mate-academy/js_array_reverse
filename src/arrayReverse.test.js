'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = arrayReverse(['Hello', 'world!']);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an empty array if the original array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an inverted array consisting of numbers`, () => {
    expect(arrayReverse([123, 456])).toEqual([321, 654]);
  });

  // eslint-disable-next-line max-len
  it(`should return an array where each element with special characters is reversed`, () => {
    expect(arrayReverse(['hello@', 'world#'])).toEqual(['@olleh', '#dlrow']);
  });

  it(`should return an inverted string array with varying lengths`, () => {
    // eslint-disable-next-line max-len
    expect(arrayReverse(['a', 'bb', 'ccc', 'dddd'])).toEqual(['a', 'bb', 'ccc', 'dddd']);
  });

  // eslint-disable-next-line max-len
  it(`should return an inverted array preserving the length and order of elements including special characters`, () => {
    // eslint-disable-next-line max-len
    expect(arrayReverse(['I', 'am', 'a', 'student!'])).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return an inverted array while handling mixed data types`, () => {
    // eslint-disable-next-line max-len, no-undef
    expect(arrayReverse(['text', 123, null, true])).toEqual(['txet', 321, null, eurt]);
  });
});
