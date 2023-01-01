'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['abc']))
      .toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['']))
      .toEqual(['']);
  });

  it(`should return an empty array
    if original array is empty`, () => {
    expect(arrayReverse([]))
      .toEqual([]);
  });

  it(`arrayReverse(['Hell0']) should return ['0lleH']`, () => {
    expect(arrayReverse(['Hell0']))
      .toEqual(['0lleH']);
  });

  it(`arrayReverse(['Mate', 'Academy']) 
      should return ['ymed', 'acAetaM']`, () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']);
  });

  it(`arrayReverse(['I', 'am', 'a', 'student!']) 
      should return ['!', 'tn', 'e', 'dutsamaI']`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  // write more tests here
});
