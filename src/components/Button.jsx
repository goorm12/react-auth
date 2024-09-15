import "./Button.css";

const Button = ({ text, bgc, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={`Button Button_${bgc}`}>
      {text}
    </button>
  );
};

export default Button;
