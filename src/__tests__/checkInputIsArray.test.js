import { checkInputIsArray } from '../utils/utils';
/**
 * test case scenario
 * Should Return error "input must be an array of strings" if given by other data type parameter
 * Should Return true when input is an array
 */

describe('CheckInput Valid', () => {
  it('Should Return error "input must be an array of strings" if given by other data type parameter', () => {
    const dataToTest = 10;
    expect(() => checkInputIsArray(dataToTest)).toThrow('Input must be an array');
  });
  it('Should Return true when input is an array', () => {
    const dataToTest = [];
    expect(checkInputIsArray(dataToTest)).toBeTruthy();
  });
});
