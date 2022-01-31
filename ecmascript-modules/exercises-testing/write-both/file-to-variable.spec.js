// #todo

import { fileToVariable } from './file-to-variable.js';

describe('Default values', () => {
  it('"" --> ""', () => {
    const expected = "";
    const actual = fileToVariable('');
    expect(actual).toEqual(expected);
  });
  it('No argument --> ""', () => {
    const expected = "";
    const actual = fileToVariable();
    expect(actual).toEqual(expected);
  });
});
describe('Kebab cases', () => {
  it('"hi-hi" --> "hiHi"', () => {
    const expected = "hiHi";
    const actual = fileToVariable('hi-hi');
    expect(actual).toEqual(expected);
  });
  it('"hi-hi-hi" --> "hiHiHi"', () => {
    const expected = "hiHiHi";
    const actual = fileToVariable('hi-hi-hi');
    expect(actual).toEqual(expected);
  });
});
describe('No kebab cases', () => {
  it('All lower case: "hihi" --> "hihi"', () => {
    const expected = "hihi";
    const actual = fileToVariable('hihi');
    expect(actual).toEqual(expected);
  });
  it('All upper case: "HIHIHI" --> "HIHIHI"', () => {
    const expected = "HIHIHI";
    const actual = fileToVariable('HIHIHI');
    expect(actual).toEqual(expected);
  });
  it('Lower case and upper case: "HIhiHI" --> "HIhiHI"', () => {
    const expected = "HIhiHI";
    const actual = fileToVariable('HIhiHI');
    expect(actual).toEqual(expected);
  });
});
describe('Argument is not a string', () => {
  it('123 --> "Introduce a string"', () => {
    const expected = "Introduce a string";
    const actual = fileToVariable(123);
    expect(actual).toEqual(expected);
  });
  it('null --> "Introduce a string"', () => {
    const expected = "Introduce a string";
    const actual = fileToVariable(null);
    expect(actual).toEqual(expected);
  });
  it('true --> "Introduce a string"', () => {
    const expected = 'Introduce a string';
    const actual = fileToVariable(true);
    expect(actual).toEqual(expected);
  });
});
