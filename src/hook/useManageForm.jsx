import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { datas } from "../data/datas";
import useValidation from "./useValidation";
import postService from "../services/postService";
import { ApiContext } from "../context/ManageApi";

/**
 * Custom hook for managing form data and submission.
 * Handles form state, validation, and submission logic.
 * @param {function} setIsModalOpen - Function to control the modal visibility state.
 * @returns {Object} - The form data, errors, and functions to handle change and submit events.
 */

const useManageForm = (setIsModalOpen) => {
  const { initialState } = datas;

  const [formData, setFormData] = useState(initialState);

  const { errors, validateFormData } = useValidation(formData);
  const { updateData } = useContext(ApiContext);

  /**
   * Handles changes to the form data.
   * @param {Object} updates - The updates to be applied to the form data.
   */
  const handleChange = (updates) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...updates,
    }));
  };

  /**
   * Handles form submission.
   * Validates the form data and submits it if valid.
   * @param {Event} e - The form submission event.
   */
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
