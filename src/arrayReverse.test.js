'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['asd'])).toBeInstanceOf(Array);
  });

  it(`should return an ['ymed', 'acAetaM']
    if original array consists of ['Mate', 'Academy']`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an empty string
  if original array consists of an empty string`, () => {
    expect(arrayReverse([' ', ' '])).toEqual([' ', ' ']);
  });

  it(`should return ['!', 'tn', 'e', 'dutsamaI']
  if original array consists of ['I', 'am', 'a', 'student!']`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return array 
  if original array consists number and special characters`, () => {
    expect(arrayReverse(['@4', '=3', '+2', '-1']))
      .toEqual(['1-', '2+', '3=', '4@']);
  });

  // write more tests here
});
