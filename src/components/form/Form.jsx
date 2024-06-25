import Dropdown from "./dropdown/Dropdown";
import Input from "./input/Input";
import ManageDate from "./managedate/ManageDate";
import useManageForm from "../../hook/useManageForm";
import Modal from "./modal/Modal";
import { useState } from "react";

/**
 * Form component
 * Renders a form with inputs for personal details, address, and status.
 * Handles form submission and displays a modal on successful submission.
 * @returns {JSX.Element} - The form component.
 */

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { formData, errors, handleChange, handleSubmit } =
    useManageForm(setIsModalOpen);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="title-wrapper">
          <h2>Personals</h2>
          <div className="input-container">
            <Input
              name="firstname"
              labelText="First name"
              handleChange={handleChange}
              value={formData.firstname}
              error={errors.firstname}
            />
            <Input
              name="lastname"
              labelText="Last name"
              handleChange={handleChange}
              value={formData.lastname}
              error={errors.lastname}
            />
          </div>
          <ManageDate
            labelText="Date of Birth"
            name="birthday"
            selected={formData.birthday}
            handleChange={handleChange}
            error={errors.birthday}
          />
        </div>

        <div className="title-wrapper">
          <h2>Adress</h2>
          <div className="input-container">
            <Input
              name="street"
              labelText="Street"
              handleChange={handleChange}
              value={formData.street}
              error={errors.street}
            />
            <Input
              name="city"
              labelText="City"
              handleChange={handleChange}
              value={formData.city}
              error={errors.city}
            />
          </div>
          <div className="input-container">
            <Input
              name="zip_code"
              labelText="ZIP code"
              handleChange={handleChange}
              value={formData.zip_code}
              error={errors.zip_code}
            />
            <Dropdown
              labelText="State"
              placeholder="Select a state"
              name="state"
              value={formData.state}
              handleChange={handleChange}
              error={errors.state}
            />
          </div>
        </div>

        <div className="title-wrapper">
          <h2>Status</h2>
          <div className="input-container">
            <ManageDate
              labelText="Date of start"
              name="start_date"
              selected={formData.start_date}
              handleChange={handleChange}
              error={errors.start_date}
            />
            <Dropdown
              labelText="Department"
              placeholder="Select a department"
              name="department"
              value={formData.department}
              handleChange={handleChange}
              error={errors.department}
            />
          </div>
        </div>

        <div className="button-wrapper">
          <button type="submit" className="add-button">
            Add
          </button>
        </div>
      </form>
      <>{isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}</>
    </>
  );
};

export default Form;
