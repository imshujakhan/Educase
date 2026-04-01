const Button = ({ onClick, text, variant = "create-btn" }) => {
  return (
    <div>
      <button onClick={onClick} className={`btn ${variant} `}>
        {text}
      </button>
    </div>
  );
};

export default Button;
