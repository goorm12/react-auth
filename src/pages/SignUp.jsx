import SignUpInput from "../components/SignupContent";
import Button from "../components/Button";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();

  const handleClickHome = () => {
    nav("/login", { replace: true });
  };
  return (
    <div>
      <Header
        title={"회원가입"}
        leftChild={
          <Button text={"X"} bgc={"transparent"} onClick={handleClickHome} />
        }
      />
      <SignUpInput />
    </div>
  );
};

export default SignUp;
