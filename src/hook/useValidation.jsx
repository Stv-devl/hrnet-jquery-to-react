import { useState } from "react";
import { validation } from "../components/form/validation/validation";

/**
 * Custom hook for validating form data.
 * Handles validation logic and error state.
 * @param {Object} formData - The form data to be validated.
 * @returns {Object} - The validation errors and a function to validate the form data.
 */

const useValidation = (formData) => {
  const [errors, setErrors] = useState({});

  /**
   * Validates the form data using the validation schema.
   * @returns {Promise<Object>} - The validation result indicating if the form data is valid and any validation errors.
   */
  const validateFormData = async () => {
    try {
      await validation.validate(formData, { abortEarly: false });
      setErrors({});
      return { isValid: true };
    } catch (err) {
      const validationErrors = err.inner.reduce(
        (acc, currentError) => ({
          ...acc,
          [currentError.path]: currentError.message,
        }),
        {}
      );
      setErrors(validationErrors);
      return { isValid: false, errors: validationErrors };
    }
  };

  return { errors, validateFormData };
};

export default useValidation;
