// clean
export const trimStrings = (strings) => {
  if (!Array.isArray(strings)) {
    throw new Error('Input must be an array of strings');
  }
  return strings.map((string) => string.trim());
};

// clean
export const checkInputValid = (inputsInArray) => {
  if (!Array.isArray(inputsInArray)) {
    throw new Error('input must be an array of strings');
  }
  return inputsInArray.every((input) => input !== undefined);
};
