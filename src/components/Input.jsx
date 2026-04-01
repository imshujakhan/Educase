const Input = ({ placeholder, label, type = "text", value }) => {
  const parts = label.split("*");
  return (
    <div className="input-box">
      <input type={type} required placeholder={placeholder} value={value} />
      <label>
        {parts[0]}{parts.length > 1 && <span className="required-star">*</span>}
      </label>
    </div>
  );
};

export default Input;
