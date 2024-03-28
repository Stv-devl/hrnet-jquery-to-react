import Dropdown from "./dropdown/Dropdown";
import Input from "./input/Input";
import ManageDate from "./managedate/ManageDate";
import useManageForm from "../../hook/useManageForm";

const Form = () => {
  const { formData, error, handleChange, handleSubmit } = useManageForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className="worker-personnal-information">
        <h2>Personals informations</h2>
        <Input
          name="firstname"
          labelText="First name"
          handleChange={handleChange}
          error={error.firstname}
        />
        <Input
          name="lastname"
          labelText="Last name"
          handleChange={handleChange}
          error={error.lastname}
        />
        <ManageDate
          labelText="Date of Birth"
          name="birthday"
          selected={formData.birthday}
          handleChange={handleChange}
          error={error.birthday}
        />
      </div>

      <div className="worker-adress">
        <h2>Adress</h2>
        <Input
          name="street"
          labelText="Street"
          handleChange={handleChange}
          error={error.street}
        />
        <Input
          name="city"
          labelText="City"
          handleChange={handleChange}
          error={error.city}
        />
        <Input
          name="zip"
          labelText="ZIP code"
          handleChange={handleChange}
          error={error.zip}
        />
        <Dropdown
          labelText="State"
          placeholder="Select a state"
          name="state"
          selected={formData.state}
          handleChange={handleChange}
          error={error.state}
        />
      </div>

      <div className="internal information">
        <h2>Worker status</h2>

        <ManageDate
          labelText="Date of start"
          name="start"
          selected={formData.start}
          handleChange={handleChange}
          error={error.start}
        />
        <Dropdown
          labelText="Department"
          placeholder="Select a department"
          name="department"
          selected={formData.department}
          handleChange={handleChange}
          error={error.department}
        />
      </div>
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default Form;
