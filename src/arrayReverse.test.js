'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse([]))
      .toEqual([]);
  });

  it(`should return an empty string
    if original array consists of an empty strings`, () => {
    expect(arrayReverse(['', '', '']))
      .toEqual(['', '', '']);
  });

  it(`should return a reversed word if an array includes 1 item`, () => {
    expect(arrayReverse(['Hello']))
      .toEqual(['olleH']);
  });

  it(`returns reversed words in dependence on initial item length
  if array includes 2 items`, () => {
    expect(arrayReverse(['Hi', 'Kitty']))
      .toEqual(['yt', 'tiKiH']);
  });

  it(`returns reversed words in dependence on initial item length
  if array includes 3 items`, () => {
    expect(arrayReverse(['Hello', 'Capitan', 'Dog']))
      .toEqual(['goDna', 'tipaCol', 'leH']);
  });

  it(`returns reversed words in dependence on initial item length
  if array includes 4 items`, () => {
    expect(arrayReverse(['This', 'is', 'a', 'Dog']))
      .toEqual(['goDa', 'si', 's', 'ihT']);
  });

  it(`returns reversed words in dependence on initial item length
  if array includes 5 items`, () => {
    expect(arrayReverse(['She', 'is', 'more', 'beautiful', 'then', 'Tamara']))
      .toEqual(['ara', 'ma', 'Tneh', 'tlufituae', 'bero', 'msiehS']);
  });

  it(`returns reversed numbers in dependence on initial item length
  if array includes 2 items`, () => {
    expect(arrayReverse(['132', '54']))
      .toEqual(['452', '31']);
  });

  it(`returns reversed simbols in dependence on initial item length
  if array includes 2 items`, () => {
    expect(arrayReverse(['@#', '%$*^']))
      .toEqual(['^*', '$%#@']);
  });
});
