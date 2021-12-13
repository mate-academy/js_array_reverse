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
    expect(arrayReverse(['What', 'c0l0r', '1s', 'a', 'carr0t', '?']))
      .toEqual(['?t0r', 'racas', '1r', '0', 'l0ctah', 'W']);
  });
});
