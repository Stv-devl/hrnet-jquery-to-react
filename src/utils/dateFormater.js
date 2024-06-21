/**
 * Converts a date to an ISO string format (YYYY-MM-DD).
 * @param {Date} date - The date to be converted.
 * @returns {string} - The date in ISO string format.
 */

export const isoDate = (date) => {
  return date.toISOString().split("T")[0];
};

/**
 * Function to selected the min date and max date for the date of birth, 18years min and 70years max
 * @param {number} yearsAgo - The min and max date to subtract from the current date.
 * @returns {Date} - The date calculated.
 */

export const dateYearsAgo = (yearsAgo) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - yearsAgo);
  return date;
};
