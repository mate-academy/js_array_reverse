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

  it(`should return an array of empty strings
    if original array consists of empty strings`, () => {
    expect(arrayReverse(['', '']))
      .toEqual(['', '']);
  });

  // write more tests here
  it(`should return an empty array
    if original array is empty`, () => {
    expect(arrayReverse([]))
      .toEqual([]);
  });

  it(`should return an array of 
    the same length as input`, () => {
    expect(arrayReverse(['1', '12', '123', '1234']))
      .toHaveLength(4);
  });

  it(`should return ['ymed', 'acAetaM']
    if original array is ['Mate', 'Academy']`, () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']);
  });

  it(`should return ['!', 'tn', 'e', 'dutsamaI']
    if original array is ['I', 'am', 'a', 'student!']`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return ['.esr', 'uocAQg', 'ni', 'katma I']
    if original array is ['I am', 'taking', 'QA', 'course.']`, () => {
    expect(arrayReverse(['I am', 'taking', 'QA', 'course.']))
      .toEqual(['.esr', 'uocAQg', 'ni', 'katma I']);
  });

  it(`should return ['511 = 00', '1 &', ' ', '5', '1']
  if original array is ['15 & 100', ' = ', '1', '1', '5']`, () => {
    expect(arrayReverse(['15 & 100', ' = ', '1', '1', '5']))
      .toEqual(['511 = 00', '1 &', ' ', '5', '1']);
  });

  it(`should return ['+_', ')', '(*', '&', '^%$', '@!']
  if original array is ['!@','$', '%^', '&', '*()', '_+']`, () => {
    expect(arrayReverse(['!@', '$', '%^', '&', '*()', '_+']))
      .toEqual(['+_', ')', '(*', '&', '^%$', '@!']);
  });
});
