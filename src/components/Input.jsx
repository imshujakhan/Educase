const Input = ({ placeholder, label, type = "text", value}) => {
  return (
    <div className="input-box">
      <input  type={type} required placeholder={placeholder} value={value}/>
      <label>{label}</label>
    </div>
  );
};

export default Input;
