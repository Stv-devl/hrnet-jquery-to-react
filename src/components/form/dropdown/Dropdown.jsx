import { datas } from "../../../data/datas";

/**
 * Dropdown component
 * Displays a dropdown selection for either state or department based on the provided name.
 * @param {string} labelText - The label text.
 * @param {string} placeholder - The placeholder text.
 * @param {string} name - The name of the dropdown, used to determine the options to display.
 * @param {string} value - The current selected value of the dropdown.
 * @param {function} handleChange - The function to handle changes to the dropdown selection.
 * @param {string} [error] - An optional error message to display if there is an error.
 * @returns {JSX.Element} - The dropdown selection component.
 */

const Dropdown = ({
  labelText,
  placeholder,
  name,
  value,
  handleChange,
  error,
}) => {
  const { department, state } = datas;
  const optionChoice = name === "state" ? state : department;

  return (
    <div className="input-wrapper">
      <label className="label" htmlFor={name}>
        {labelText}
      </label>
      <select
        className="dropdown"
        id={name}
        name={name}
        value={value}
        onChange={(e) => handleChange({ [name]: e.target.value })}
      >
        <option>{placeholder}</option>
        {optionChoice.map((option, index) => (
          <option key={`${option}${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Dropdown;
