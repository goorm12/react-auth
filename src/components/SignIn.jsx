import "./SignIn.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const nav = useNavigate();

  const HandleClick = () => {
    nav("/signup", { replace: true });
  };

  return (
    <div>
      <div className="SignIn">
        <div className="sign-in__id">
          <label htmlFor="input_id">아이디</label>
          <input
            type={"text"}
            placeholder={"아이디를 입력해주세요"}
            id={"input_id"}
          />
        </div>
        <div className="sign-in__pw">
          <label htmlFor="input_pw">비밀번호</label>
          <input
            type={"password"}
            placeholder={"비밀번호를 입력해주세요"}
            id={"input_pw"}
          />
        </div>
        <Button text={"로그인"} bgc={"blue"} />
        <Button text={"회원가입"} bgc={"blue"} onClick={HandleClick} />
      </div>
    </div>
  );
};

export default SignIn;
