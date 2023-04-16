import { trimStrings } from '../utils/utils';

/**
 * test case scenario
 * Should Return Error When Given By not Array of String Input
 * Should Return Data Trimmed When Given By Array of String Parameter
 * Should Return empty array when given by empty array parameter
 */

describe('Trim Strings', () => {
  it('Should Return Error When Given By not Array of String Input', () => {
    const dataToTest = [1, 2, 3, '123', '456'];
    expect(() => trimStrings(dataToTest)).toThrow();
  });
  it('Should Return Data Trimmed When GIven By Array of String Parameter', () => {
    const dataToTest = ['asd  ', '   asd', 'asd'];
    expect(trimStrings(dataToTest)).toEqual(['asd', 'asd', 'asd']);
  });
  it('Should Return Empty Array When Given by Empty Array Parameter', () => {
    expect(trimStrings([])).toEqual([]);
  });
});
