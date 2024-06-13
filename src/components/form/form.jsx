import Dropdown from "./dropdown/Dropdown";
import Input from "./input/Input";
import ManageDate from "./managedate/ManageDate";
import useManageForm from "../../hook/useManageForm";
import Modal from "./modal/Modal";
import { useState } from "react";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { formData, errors, handleChange, handleSubmit } =
    useManageForm(setIsModalOpen);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="worker-personnal-information">
          <h2>Personals informations</h2>
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
          <ManageDate
            labelText="Date of Birth"
            name="birthday"
            selected={formData.birthday}
            handleChange={handleChange}
            error={errors.birthday}
          />
        </div>

        <div className="worker-adress">
          <h2>Adress</h2>
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

        <div className="internal information">
          <h2>Worker status</h2>

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
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <>{isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}</>
    </>
  );
};

export default Form;
