import { useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import { data } from "../../data/data";

const Add = () => {
  const { departement, states } = data;

  const [service, setService] = useState("");
  const [state, setState] = useState("");

  return (
    <main>
      <section className="add-worker">
        <h1>Add a new employee</h1>
        <form>
          <div className="worker-personnal-information">
            <h2>Personals informations</h2>
            <div className="input-wrapper">
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" name="firstname" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" name="lastname" />
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
              <input type="text" id="street" name="street" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="zipcode">ZIP Code</label>
              <input type="text" id="zipcode" name="zipcode" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="state">State</label>
              <Dropdown
                options={states}
                placeholder="Select a state"
                setId="state"
                selected={state}
                setSelected={setState}
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
              <label htmlFor="departement">departement</label>
              <Dropdown
                options={departement}
                placeholder="Select a departement"
                setId="departement"
                selected={service}
                setSelected={setService}
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
