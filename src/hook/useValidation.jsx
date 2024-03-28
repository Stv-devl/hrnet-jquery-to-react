import { useState, useEffect } from "react";
import { validation } from "../utils/validation";

const useValidation = (formData, isSubmitted) => {
  const [isValidate, setIsValidate] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    if (isSubmitted) {
      const validate = async () => {
        try {
          await validation.validate(formData, { abortEarly: false });
          setIsValidate(true);
          setError({});
        } catch (err) {
          const validationErrors = err.inner.reduce(
            (acc, currentError) => ({
              ...acc,
              [currentError.path]: currentError.message,
            }),
            {}
          );
          setIsValidate(false);
          setError(validationErrors);
        }
      };
      validate();
    } else {
      setError({});
    }
  }, [formData, isSubmitted]);

  return { error, isValidate };
};

export default useValidation;
