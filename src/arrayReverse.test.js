'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Hell0']))
      .toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['', '']))
      .toEqual(['', '']);
  });

  it(`should return an empty array if called with an empty array`, () => {
    expect(arrayReverse([]))
      .toEqual([]);
  });

  it(`should return the reversed string`, () => {
    expect(arrayReverse(['Hell0']))
      .toEqual(['0lleH']);
  });

  it(`should return the reversed array
   where the length of the strings from the original array
   does not change`, () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']);
  });

  it(`should return the reversed array
   where the strings from the original array consists of
   Latin letters, numbers and special symbols`, () => {
    expect(arrayReverse(['I', 'am', 'a', '18@', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dut', 's@81amaI']);
  });

  it(`should return the same string that consists of 1 character`, () => {
    expect(arrayReverse(['#']))
      .toEqual(['#']);
  });

  it(`should throw an error if argument is not an array`, () => {
    expect(() => {
      arrayReverse();
    }).toThrow();
  });
});
