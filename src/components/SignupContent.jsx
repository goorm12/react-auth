import "./SignupContent.css";
import Button from "./Button";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authService } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const SignUpInput = () => {
  const [emailLocalPart, setEmailLocalPart] = useState("");
  const [emailDomainPart, setEmailDomainPart] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const onCreate = async (e) => {
    e.preventDefault();
    const fullEmail = `${emailLocalPart}@${emailDomainPart}`;

    if (!emailLocalPart || !emailDomainPart) {
      setError("이메일이 잘못되었습니다.");
      return;
    } else if (!password || password !== confirmPassword) {
      setError("비밀번호가 잘못되었거나, 비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        authService,
        fullEmail,
        password
      );

      const user = userCredential.user;

      if (user) {
        nav("/login", { replace: true });
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorCode, errorMessage);
    }
  };

  return (
    <section className="SignUpInput">
      <form onSubmit={onCreate}>
        <div className="email_input_wrapper">
          <div className="email_input">
            <label htmlFor="input_email">이메일</label>
            <input
              type={"text"}
              placeholder={"이메일을 입력해주세요"}
              id={"input_email"}
              onChange={(e) => setEmailLocalPart(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <span>@</span>
          <div className="select">
            <select
              onChange={(e) => setEmailDomainPart(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="naver.com">naver.com</option>
              <option value="google.com">google.com</option>
              <option value="daum.net">daum.net</option>
            </select>
          </div>
        </div>

        <div className="pw_input_wrapper">
          <div className="pw_first-child">
            <label htmlFor="input_pw_1">비밀번호</label>
            <input
              type={"password"}
              placeholder={"비밀번호를 입력해주세요"}
              id={"input_pw_1"}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
            />
          </div>

          <div className="pw_second-child">
            <input
              type={"password"}
              placeholder={"비밀번호를 입력해주세요"}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="tel_input_wrapper">
          <div className="tel_input">
            <label htmlFor="input_tel">전화번호</label>
            <input
              type={"tel"}
              placeholder={"전화번호를 입력해주세요"}
              id={"input_tel"}
              autoComplete="off"
              required
            />
          </div>
          <div className="tel_btn">
            <Button text={"인증번호 받기"} bgc={"blue"} />
          </div>
        </div>

        <div className="submit_button">
          <Button text={"가입하기"} bgc={"blue"} type={"submit"} />
        </div>

        {error && <div className="error-message">{error}</div>}
      </form>
    </section>
  );
};

export default SignUpInput;
