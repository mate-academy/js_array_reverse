'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  test(`Function should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['']))
      .toEqual(['']);
  });

  test(`Function should return reversed string
    if original array consists of a valid chars`, () => {
    expect(arrayReverse(['https://www.youtube.com/watch?v=xHoxkD8kKJg&ab_channel=RedLegionGaming']))
      .toEqual(['gnimaGnoigeLdeR=lennahc_ba&gJKk8DkxoHx=v?hctaw/moc.ebutuoy.www//:sptth']);
  });

  test(`Function should return reversed string
    if original array consists of a valid chars`, () => {
    expect(arrayReverse(['What', 'c0l0r', '1s', 'a', 'carr0t', '?']))
      .toEqual(['?t0r', 'racas', '1r', '0', 'l0ctah', 'W']);
  });

  test(`Function should return reversed string
    if original array consists of a valid chars`, () => {
    expect(arrayReverse(['I,', 'I', 'think', 'it\'s', 'a', 'carrot']))
      .toEqual(['to', 'r', 'racas', '\'tik', 'n', 'ihtI,I']);
  });

  test(`Function should return reversed string
    if original array consists of a valid chars`, () => {
    expect(arrayReverse(['Spell', '"R-E-D"']))
      .toEqual(['"D-E-', 'R"llepS']);
  });

  test(`Function should return reversed string
    if original array consists of a valid chars`, () => {
    expect(arrayReverse(['L-s-t-e-r']))
      .toEqual(['r-e-t-s-L']);
  });

  test(`Function should return reversed string
    if original array consists spaces only`, () => {
    expect(arrayReverse(['     ']))
      .toEqual(['     ']);
  });
});
