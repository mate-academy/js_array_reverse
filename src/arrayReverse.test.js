'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([])).toBeInstanceOf(Array);
  });

  it(`should return an reversed array
    if original array consists array`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['', ''])).toEqual(['', '']);
  });

  it(`should return an reversed array
    if original array is palindrom`, () => {
    expect(arrayReverse(['deed', 'peep'])).toEqual(['peep', 'deed']);
  });

  it(`should return an empty string
    if original array is numberic`, () => {
    expect(arrayReverse([1234, 5678])).toEqual(['', '']);
  });

  it(`should return an reverse string
    if original array is numberic`, () => {
    expect(arrayReverse(['1234', '5678'])).toEqual(['8765', '4321']);
  });

  it(`should return an reverse string
    if original array is with special symbols`, () => {
    expect(arrayReverse(['!@#$', '%^&*'])).toEqual(['*&^%', '$#@!']);
  });

  it(`should return an case sensetive reversed array
    if original array is in Lower or Higher case`, () => {
    expect(arrayReverse(['Abcd', 'Defg'])).toEqual(['gfeD', 'dcbA']);
  });
});
