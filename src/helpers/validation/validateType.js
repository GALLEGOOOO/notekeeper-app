/**
 * Validate if a value has the specified type
 *
 * @param {any} value The value to validate
 * @param {string} type The expected type (e.g., 'string', 'number', 'boolean', etc.)
 * @returns {boolean} True if the value has the specified type, otherwise false
 */

export const validateType = (value, type) => {
  return typeof value === type;
};
