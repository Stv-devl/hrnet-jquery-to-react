const Dropdown = ({ options, placeholder, setId, selected, setSelected }) => {
  return (
    <select
      id={setId}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
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
