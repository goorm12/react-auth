import "./Button.css";

const Button = ({ text, bgc, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${bgc}`}>
      {text}
    </button>
  );
};

export default Button;
