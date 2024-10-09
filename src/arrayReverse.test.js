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

  // eslint-disable-next-line max-len
  it(`should return an inverted array while ignoring non-string elements`, () => {
    // eslint-disable-next-line max-len
    expect(arrayReverse([123, true, null, undefined])).toEqual([321, true, null, undefined]);
  });

  it(`should handle null input and return an empty array`, () => {
    expect(arrayReverse(null)).toEqual([]);
  });

  it(`should handle undefined input and return an empty array`, () => {
    expect(arrayReverse(undefined)).toEqual([]);
  });

  // eslint-disable-next-line max-len
  it(`should handle an array with mixed data types and reverse only reversible elements`, () => {
    // eslint-disable-next-line max-len
    expect(arrayReverse([123, 'hello', null, true, undefined])).toEqual([321, 'olleh', null, true, undefined]);
  });
});
