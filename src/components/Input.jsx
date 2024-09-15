import "./Input.css";
const Input = ({ title, type, placeholder, labelId }) => {
  return (
    <>
      <label htmlFor={labelId}>{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={labelId}
        name="{labelId}"
      />
    </>
  );
};

export default Input;
