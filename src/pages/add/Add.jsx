import { useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import { data } from "../../data/data";
import workers from "../../data/workers.json";

const Add = () => {
  const { departement, states } = data;

  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    birthdate: "",
    street: "",
    city: "",
    zip: "",
    state: "",
    start: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = workers.workers.length + 1;
    console.log(newId);
    setFormData((prevFormData) => ({
      ...prevFormData,
      id: newId,
    }));

    console.log(formData);
  };

  return (
    <main>
      <section className="add-worker">
        <h1>Add a new employee</h1>
        <form onSubmit={handleSubmit}>
          <div className="worker-personnal-information">
            <h2>Personals informations</h2>
            <div className="input-wrapper">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="birthdate">Date of Birth</label>
              <input type="date" id="birthdate" name="birthdate" />
            </div>
          </div>
          <div className="worker-adress">
            <h2>Adress</h2>
            <div className="input-wrapper">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                id="street"
                name="street"
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="zipcode">ZIP Code</label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="state">State</label>
              <Dropdown
                options={states}
                placeholder="Select a state"
                name="state"
                selected={formData.state}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="internal information">
            <h2>Worker status</h2>
            <div className="input-wrapper">
              <label htmlFor="startdate">Start date:</label>
              <input type="date" id="startdate" name="startdate" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="department">departement</label>
              <Dropdown
                options={departement}
                placeholder="Select a department"
                name="department"
                selected={formData.department}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="add-button">
            Add
          </button>
        </form>
      </section>
    </main>
  );
};

export default Add;
