import Button from "../components/Button";
import Header from "../components/Header";
import SignIn from "../components/SignIn";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  const handleClickHome = () => {
    nav("/home", { replace: true });
  };

  return (
    <div>
      <Header
        title={"로그인"}
        leftChild={
          <Button text={"X"} bgc={"transparent"} onClick={handleClickHome} />
        }
      />
      <SignIn />
    </div>
  );
};

export default Login;
