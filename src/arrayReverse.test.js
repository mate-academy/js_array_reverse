"use strict";

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require("./arrayReverse");

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(["Hello"])).toEqual(["olleH"]);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(["", ""])).toEqual(["", ""]);
  });

  it(`should return an array of a string with the original length
    if the original array consists of characters`, () => {
    expect(arrayReverse(["I", "am", "a", "student!"])).toEqual([
      "!",
      "tn",
      "e",
      "dutsamaI",
    ]);
  });

  it(`return the inverted rows in the array
    in the same order as the original, with the same string length`, () => {
    expect(arrayReverse(["Mate", "Academy"])).toEqual(["ymed", "acAetaM"]);
  });

  it(`should return an empty array if the original array is empty`, () => {
    expect(arrayReverse([])).toEqual([]);
  });

  it(`should return an array of a string with the original length
    if the original array consists of the same characters in the words`, () => {
    expect(arrayReverse(["aaa", "bbb"])).toEqual(["bbb", "aaa"]);
  });

  it(`should return an array of strings
    if the source array consists of characters and numbers`, () => {
    expect(arrayReverse(["123", "abc!"])).toEqual(["!cb", "a321"]);
  });

  it(`should return an array of strings
    if the source array contains special characters`, () => {
    expect(arrayReverse(["!@#", "!$%"])).toEqual(["%$!", "#@!"]);
  });
});
