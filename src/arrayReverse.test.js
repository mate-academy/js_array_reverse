'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should accept cyrillic letters`, () => {
    expect(arrayReverse(['привет', 'друг'])).toEqual(['гурдте', 'вирп']);
  });

  it(`should accept special symbols`, () => {
    expect(arrayReverse(['!@#', '$%^&*'])).toEqual(['*&^', '%$#@!']);
  });

  it(`should accept digits `, () => {
    expect(arrayReverse(['1234', '567890'])).toEqual(['0987', '654321']);
  });

  it(`should accept 2 fields if one of them is empty `, () => {
    expect(arrayReverse(['', 'fsd'])).toEqual(['', 'dsf']);
  });

  it(`should accept spaces in strings `, () => {
    expect(arrayReverse(['Hello', 'my friend'])).toEqual(
      ['dneir', 'f ymolleH']);
  });

  it(`should be case sensitive `, () => {
    expect(arrayReverse(['HellO', 'WorlD'])).toEqual(['DlroW', 'OlleH']);
  });
});
