'use strict';

const arrayReverse = require('./arrayReverse');

describe(`Function 'arrayReverse' should:`, () => {
  it(`be declared`, () => {
    expect(arrayReverse)
      .toBeInstanceOf(Function);
  });

  it(`return an array`, () => {
    expect(arrayReverse(['Mate']))
      .toBeInstanceOf(Array);
  });

  it(`return array of the same length`, () => {
    const testArray = ['Mate', 'Academy'];
    const result = arrayReverse(testArray);

    expect(result)
      .toHaveLength(2);
  });

  it('not change arrays elements length', function() {
    const testArray = ['Mate', 'Academy'];
    const result = arrayReverse(testArray);

    expect(result[0])
      .toHaveLength(4);

    expect(result[1])
      .toHaveLength(7);
  });

  it('work correctly with one word', function() {
    const testArray = ['Mate'];
    const result = arrayReverse(testArray);

    expect(result)
      .toEqual(['etaM']);
  });

  it(`work correctly with palindrome's`, function() {
    const testArray = ['rotator', 'rotator'];
    const result = arrayReverse(testArray);

    expect(result)
      .toEqual(['rotator', 'rotator']);
  });

  it('work correctly with words of different length', function() {
    const testArray = ['I', 'am', 'a', 'student!'];
    const result = arrayReverse(testArray);

    expect(result)
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it('throw error if no arguments passed', function() {
    expect(() => arrayReverse())
      .toThrowError();
  });

  it('throw error if argument type is not an array', function() {
    expect(() => arrayReverse(26))
      .toThrowError();
  });
});
