'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {

  });

  it(`should return a reverse text`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it('should return a reversed word', () => {
    expect(arrayReverse(['Hello'])).toEqual(['olleH']);
  });

  it('should return a reversed word', () => {
    expect(arrayReverse(['Holla-Madrid'])).toEqual(['dirdaM-alloH']);
  });
});
