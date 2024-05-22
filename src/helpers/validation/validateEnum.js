/**
 * Validate if a value is included in a list of enum values
 *
 * @param {any} value The value to check inside the enumValues array
 * @param {Array} enumValues The array of allowed enum values
 * @returns {boolean} True if the value is included in the enumValues array, otherwise false
 */

export const validateEnum = (value, enumValues) => {
  return enumValues.includes(value);
};
