import "./Input.css";
const Input = ({ title, type, placeholder }) => {
  return (
    <div className="Input">
      <label>
        {title}
        <input type={type} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default Input;
