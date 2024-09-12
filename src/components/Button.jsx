import "./Button.css";

const Button = ({ text, bgc }) => {
  return <button className={`Button Button_${bgc}`}>{text}</button>;
};

export default Button;
