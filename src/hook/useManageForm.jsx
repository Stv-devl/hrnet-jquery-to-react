import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { datas } from "../data/datas";
import useValidation from "./useValidation";
import postService from "../services/postService";
import { ApiContext } from "../context/ManageApi";

const useManageForm = (setIsModalOpen) => {
  const { initialState } = datas;

  const [formData, setFormData] = useState(initialState);

  const { errors, validateFormData } = useValidation(formData);
  const { updateData } = useContext(ApiContext);

  const handleChange = (updates) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...updates,
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

        const newEmployeeData = await postService(updatedFormData);
        updateData(newEmployeeData);

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
