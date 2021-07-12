'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(arrayReverse(['Test', 'Hello']))
      .toBeInstanceOf(Array);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['']))
      .toEqual(['']);
  });

  it(`should return a reverse string from
    original array if it contains only one string-element`, () => {
    expect(arrayReverse(['Testing']))
      .toEqual(['gnitseT']);
  });

  it(`should return a reverse string from
    original array if it contains digits`, () => {
    expect(arrayReverse(['0123456']))
      .toEqual(['6543210']);
  });

  it(`should return a reverse string from
    original array if it contains special characters`, () => {
    expect(arrayReverse(['#!MateAcademy^^^']))
      .toEqual(['^^^ymedacAetaM!#']);
  });

  it(`should return a reverse string elements from original
    array if both elements have equal length`, () => {
    expect(arrayReverse(['Array#1', 'Test12!']))
      .toEqual(['!21tseT', '1#yarrA']);
  });

  it(`should return a reverse string elements from original
    array containing spaces`, () => {
    expect(arrayReverse(['It is test', 'array # 11']))
      .toEqual(['11 # yarra', 'tset si tI']);
  });

  it(`should return a reverse string elements from original
    array according to elements length`, () => {
    expect(arrayReverse(['Array#35', 'It is']))
      .toEqual(['si tI53#', 'yarrA']);
  });

  it(`should return a reverse string elements from original
    array according to elements length with > 2 elements`, () => {
    expect(arrayReverse(['Array#35', 'is', 'the', 'best']))
      .toEqual(['tsebehts', 'i5', '3#y', 'arrA']);
  });
});
