'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');
  const wordsExample = ['TS', 'is', 'better', 'then', 'JS', '100%'];
  const resultExample = arrayReverse(wordsExample);

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof resultExample).toEqual('object');
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an empty array
    if original array is empty too`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an reversed array
    if original array is ['Hell0']`, () => {
    expect(arrayReverse(['Hell0']))
      .toEqual(['0lleH']);
  });

  it(`should return an reversed array
    if original array is ['Mate', 'Academy']`, () => {
    expect(arrayReverse(['Mate', 'Academy']))
      .toEqual(['ymed', 'acAetaM']);
  });

  it(`should return an reversed array
    if original array is ['I', 'am', 'a', 'student!']`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return an reversed array
    if original array is ['TS', 'is', 'better', 'then', 'JS', '100%']`, () => {
    expect(resultExample)
      .toEqual(['%0', '01', 'SJneht', 'rett', 'eb', 'siST']);
  });
});
