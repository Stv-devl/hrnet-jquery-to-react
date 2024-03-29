const Input = ({ name, labelText, handleChange, value, error }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{labelText}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
