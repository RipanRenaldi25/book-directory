import { checkInputHasValues } from '../utils/utils';

/**
 * Test case Scenario
 * Should Return Error with Message 'Please Field Value First'
 * Should Return False When Given By Data with Value is undefined
 * Should Return True When Data is fullfield
 */

describe('CheckInputHasValues', () => {
  it('Should Return Error with Message "Please Field Value First"', () => {
    const dataToTest = [];
    expect(() => checkInputHasValues(dataToTest)).toThrow('Please Field Value First');
  });
  it('Should Return False When Given By Data with Value is undefined', () => {
    const dataToTest = [1, 2, 3, undefined];
    expect(checkInputHasValues(dataToTest)).toBeFalsy();
  });
  it('Should Return True When Data is fullfield', () => {
    const dataToTest = ['1', '2', '3', 'asd'];
    expect(checkInputHasValues(dataToTest)).toBeTruthy();
  });
});
