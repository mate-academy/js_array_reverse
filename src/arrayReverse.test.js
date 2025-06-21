'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`an empty array`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`one item`, () => {
    expect(arrayReverse(['Hell0'])).toEqual(['0lleH']);
  });

  it(`several items`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`with empty strings`, () => {
    expect(arrayReverse(['a', '', 'bc'])).toEqual(['c', '', 'ba']);
  });
});
