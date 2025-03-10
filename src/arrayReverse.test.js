'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an empty array if array is empty`, () => {
    expect(arrayReverse([])).toEqual([])
  });

  it(`should return a reversed array ["dalV"] if the initial array is ["Vlad"]` , () => {
    expect(arrayReverse(['dalV'])).toEqual(['Vlad'])
  });

  it(`should return a reversed array ['d', 'al', 'VmaI'] if the initial array is ["I am Vlad"]`, () => {
    expect(arrayReverse(['d', 'al', 'VmaI'])).toEqual(['I', 'am', 'Vlad'])
  });

  it(`should return an array ['oirpac iD', ''] if the initial array is ['Di caprio', '']`, () => {
    expect(arrayReverse(['oirpac iD', ''])).toEqual(['Di caprio', ''])
  });

  it(`should return an array ['AQnoitamot', 'uA'] if the initial array is ['Automation', 'QA']`, () => {
    expect(arrayReverse(['AQnoitamot', 'uA'])).toEqual(['Automation', 'QA'])
  })

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });
});
