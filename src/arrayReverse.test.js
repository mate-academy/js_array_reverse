'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Hello']))
      .toBeInstanceOf(Array);
  });

  it(`should return an empty array
    if input consists empty array`, () => {
    expect(arrayReverse([]))
      .toEqual([]);
  });

  it(`should return the reversed array`, () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']);
  });

  it(`should return the reversed array when the original array consists`
   + ` of Latin letters, numbers and special symbols.`, () => {
    expect(arrayReverse(['♥M%@', '1&!:']))
      .toEqual([':!&1', '@%M♥']);
  });

  it(`should return array with not changed length of `
  + `the strings from the original array`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
 });
});
