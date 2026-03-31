const Button = ({ onClick, text ,variant="createBtn"}) => {
  return (
    <div>
      <button onClick={onClick} className={`btn ${variant} `}>
        {text}
      </button>
    </div>
  );
};

export default Button;
