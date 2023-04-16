// clean
export const trimStrings = (strings) => {
  if (!Array.isArray(strings)) {
    throw new Error('Input must be an array of strings');
  }
  return strings.map((string) => string.trim());
};

// clean

export const checkInputHasValues = (inputsInArray) => {
  if (inputsInArray.length === 0) {
    throw new Error('Please Field Value First');
  }
  return inputsInArray.every((input) => input !== undefined);
};

export const checkInputIsArray = (inputsInArray) => {
  if (!Array.isArray(inputsInArray)) {
    throw new Error('Input must be an array');
  }
  return true;
};
