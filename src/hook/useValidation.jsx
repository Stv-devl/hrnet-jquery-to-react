import { useState } from "react";
import { validation } from "../components/form/validation/validation";

const useValidation = (formData) => {
  const [errors, setErrors] = useState({});

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
