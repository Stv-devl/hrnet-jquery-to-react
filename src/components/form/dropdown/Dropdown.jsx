import { datas } from "../../../data/datas";

const Dropdown = ({
  labelText,
  placeholder,
  name,
  selected,
  handleChange,
  error,
}) => {
  const { department, state } = datas;
  const optionChoice = name === "state" ? state : department;

  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{labelText}</label>
      <select id={name} name={name} value={selected} onChange={handleChange}>
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
