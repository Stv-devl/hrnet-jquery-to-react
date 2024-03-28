import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { isoDate } from "../utils/dateFormater";
import useValidation from "./useValidation";

const initialState = {
  id: "",
  firstname: "",
  lastname: "",
  birthday: "",
  street: "",
  city: "",
  zip: "",
  state: "",
  start: "",
  department: "",
};

const useManageForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { error, isValidate } = useValidation(formData, isSubmitted);

  const handleChange = (eventOrDate, name) => {
    let value = eventOrDate.target
      ? eventOrDate.target.value
      : isoDate(eventOrDate);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name || eventOrDate.target.name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (isValidate) {
      try {
        const uniqueId = uuidv4();
        const updatedFormData = { ...formData, id: uniqueId };
        console.log("Validation success:", updatedFormData);

        /*await sendFormToServer(updatedFormData);
        console.log("Data successfully sent to the server");*/

        setFormData(initialState);
        setIsSubmitted(false);
      } catch (error) {
        console.error("Erreur lors de l'envoi des données");
      }
    } else {
      console.log("Erreur de validation:");
    }
  };

  return {
    formData,
    error,
    handleChange,
    handleSubmit,
  };
};

export default useManageForm;
