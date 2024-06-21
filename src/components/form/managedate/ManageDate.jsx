import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateYearsAgo, isoDate } from "../../../utils/dateFormater";

const ManageDate = ({ name, labelText, handleChange, selected, error }) => {
  return (
    <div className="input-wrapper">
      <label className="label" htmlFor={name}>{`${labelText}:`}</label>
      <DatePicker
        name={name}
        id={name}
        className="date-picker"
        placeholderText="dd/mm/yyyy"
        dateFormat="dd/MM/yyyy"
        minDate={name === "start" ? "2000-01-01" : dateYearsAgo(70)}
        maxDate={name === "start" ? new Date() : dateYearsAgo(18)}
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
