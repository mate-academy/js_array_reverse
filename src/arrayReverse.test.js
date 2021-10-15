'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Mate'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['', 'Academy'])).toEqual(['', 'ymedacA']);
  });

  it(`should return an empty strings
  if original array consists of an empty strings`, () => {
    expect(arrayReverse(['', ''])).toEqual(['', '']);
  });

  it(`should return an reverse strings ['ymed', 'acAetaM']
    if original array consists  strings ['Mate', 'Academy']`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an strings ['!', 'tn', 'e', 'dutsamaI']
    if original array
    consists of an strings ['I', 'am', 'a', 'student!']`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return an string ['ymedacA_etaM']
    if original array consists of an string ['Mate_Academy']`, () => {
    expect(arrayReverse(['Mate_Academy'])).toEqual(['ymedacA_etaM']);
  });

  it(`should return an string ['321!@_c', 'bAdrowyeK']
    if original array consists of an string ['Keyword', 'Abc_@!123']`, () => {
    expect(arrayReverse(['Keyword', 'Abc_@!123']))
      .toEqual(['321!@_c', 'bAdrowyeK']);
  });

  it(`should return an string ['cba54', '321']
    if original array consists of an string ['12345', 'abc']`, () => {
    expect(arrayReverse(['12345', 'abc']))
      .toEqual(['cba54', '321']);
  });
});
