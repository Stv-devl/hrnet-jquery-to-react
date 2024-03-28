export const isoDate = (date) => {
  return date.toISOString().split("T")[0];
};

export const dateYearsAgo = (yearsAgo) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - yearsAgo);

  return date;
};
