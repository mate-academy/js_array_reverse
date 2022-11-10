'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Hello'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  test('should return the reversed array ', () => {
    const world = ['Mate', 'Academy'];

    expect(arrayReverse(world)).toEqual(['ymed', 'acAetaM']);
  });

  test(`should return the reversed array 
    when the original array consists of Latin letters, 
    numbers and special symbols.  `, () => {
    const world = ['♥M%@', '1&!:'];

    expect(arrayReverse(world)).toEqual([':!&1', '@%M♥']);
  });

  test(`should return the reversed array and 
    the length of the strings from the original array 
    does not change`, () => {
    const world = ['I', 'am', 'a', 'student!'];
    const result = arrayReverse(world);

    expect(result).toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });
});
