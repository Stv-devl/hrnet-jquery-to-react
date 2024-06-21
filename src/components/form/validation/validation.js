import * as Yup from "yup";

/**
 * validation schema for name fields.
 * @param {string} fieldName - The name of the field to be validated.
 * @returns {Yup.StringSchema} - The validation schema for the name field.
 */
const nameValidation = (fieldName) =>
  Yup.string()
    .matches(
      /^[A-Za-z]{2,25}$/,
      `The ${fieldName} must be between 2 and 25 characters and contain correct characters.`
    )
    .required(`${fieldName} is required`);

/**
 * Creates a validation schema for date fields.
 * @param {string} fieldName - The name of the field to be validated.
 * @returns {Yup.DateSchema} - The validation schema for the date field.
 */
const dateValidation = (fieldName) =>
  Yup.date()
    .nullable()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    )
    .required(`${fieldName} is required`);

/**
 * Validation schema for the worker form.
 * @type {Yup.ObjectSchema}
 */

export const validation = Yup.object({
  firstname: nameValidation("First name"),
  lastname: nameValidation("Last name"),

  street: Yup.string()
    .required("The adress is required")
    .matches(/^\d+\s[A-Za-z0-9.\-'\s]+$/, "You must write a valid adress."),
  city: Yup.string()
    .required("The city is required")
    .matches(
      /^[a-zA-Z\s]{2,25}$/,
      "The city must be between 2 and 25 characters and contain only letters."
    ),
  zip_code: Yup.string()
    .required("The ZIPcode is required")
    .matches(/^\d{5}$/, "The ZIPcode must contain 5 digits."),
  state: Yup.string().required("The State is required"),
  department: Yup.string().required("The department is required"),
  birthday: dateValidation("The birthday"),
  start_date: dateValidation("The worker start date"),
}).required();
