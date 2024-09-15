import "./SignIn.css";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authService } from "../firebase/firebaseConfig";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const HandleClick = () => {
    nav("/signup", { replace: true });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const userSignIn = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
      const user = userSignIn.user;
      if (user) {
        nav("/", { replace: true });
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error Login user:", errorCode, errorMessage);
    }
  };

  return (
    <div className="SignIn">
      <form onSubmit={onLogin}>
        <div className="sign-in__email">
          <label htmlFor="input_email">이메일</label>
          <input
            type={"email"}
            placeholder={"이메일을 입력해주세요"}
            id={"input_email"}
            autoComplete="off"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="sign-in__pw">
          <label htmlFor="input_pw">비밀번호</label>
          <input
            type={"password"}
            placeholder={"비밀번호를 입력해주세요"}
            id={"input_pw"}
            autoComplete="off"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button text={"로그인"} bgc={"blue"} type={"submit"} />
        <Button text={"회원가입"} bgc={"blue"} onClick={HandleClick} />
      </form>
    </div>
  );
};

export default SignIn;
