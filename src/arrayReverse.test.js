'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['words'])).toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mat e', '', 'Aca demy']))
      .toEqual(['ymed ', '', 'acAe taM']);
  });

  it(`should return a string of the letters and symbol 
    if original array consists of a srting of a letters and symbol`, () => {
    expect(arrayReverse(['I', 'am', 'a', 'student!']))
      .toEqual(['!', 'tn', 'e', 'dutsamaI']);
  });

  it(`should return a symbols/letters/numbers string
    if original array consists of a symbols/letters/numbers string`, () => {
    expect(arrayReverse(['HЭl°l0']))
      .toEqual(['0l°lЭH']);
  });
});
