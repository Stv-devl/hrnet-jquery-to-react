const Dropdown = ({ options, placeholder, name, selected, onChange }) => {
  return (
    <select id={name} name={name} value={selected} onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={`${option}${index}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
