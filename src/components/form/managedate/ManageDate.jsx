import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateYearsAgo, isoDate } from "../../../utils/dateFormater";

/**
 * ManageDate component
 * Renders a date picker with a label and an optional error message.
 * @param {string} name - The name of the date picker.
 * @param {string} labelText - The label text for the date picker.
 * @param {function} handleChange - The function to handle changes to the date picker .
 * @param {Date} selected - The currently selected date.
 * @param {string} [error] - An optional error message to display if there is an error.
 * @returns {JSX.Element} - The date picker component.
 */

const ManageDate = ({ name, labelText, handleChange, selected, error }) => {
  console.log(name);
  return (
    <div className="input-wrapper">
      <label className="label" htmlFor={name}>{`${labelText}:`}</label>
      <DatePicker
        name={name}
        id={name}
        className="date-picker"
        placeholderText="dd/mm/yyyy"
        dateFormat="dd/MM/yyyy"
        minDate={name === "start_date" ? "2000-01-01" : dateYearsAgo(70)}
        maxDate={name === "start_date" ? new Date() : dateYearsAgo(18)}
        showYearDropdown
        dropdownMode="select"
        selected={selected}
        onChange={(date) => handleChange({ [name]: isoDate(date) })}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default ManageDate;
