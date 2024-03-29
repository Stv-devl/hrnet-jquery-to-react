import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { datas } from "../data/datas";
import { isoDate } from "../utils/dateFormater";
import useValidation from "./useValidation";
import postService from "../services/postService";

const useManageForm = (setIsModalOpen) => {
  const { initialState } = datas;

  const [formData, setFormData] = useState(initialState);

  const { errors, validateFormData } = useValidation(formData);

  const handleChange = (eOrDate, name) => {
    const value = eOrDate.target ? eOrDate.target.value : isoDate(eOrDate);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name || eOrDate.target.name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = await validateFormData();
    if (isValid) {
      try {
        const uniqueId = uuidv4();
        const updatedFormData = { ...formData, id: uniqueId };
        console.log("Validation success:", updatedFormData);
        await postService(updatedFormData);
        console.log("Data successfully sent to the server");
        setFormData(initialState);
        setIsModalOpen(true);
      } catch (error) {
        console.error("Error sending data:", error);
      }
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useManageForm;
