import SignUpInput from "../components/SignUpInput";
import Button from "../components/Button";
import Header from "../components/Header";

const SignUp = () => {
  return (
    <div>
      <Header title={"회원가입"} leftChild={<Button text={"X"} />} />
      <SignUpInput />
    </div>
  );
};

export default SignUp;
