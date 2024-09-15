import "./SignupContent.css";
import Button from "./Button";
import { useState } from "react";

const SignUpInput = () => {
  const [id, setId] = useState("");
  const [emailLocalPart, setemailLocalPart] = useState("");
  const [emailDomainPart, setEmailDomainPart] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onCreate = (e) => {
    e.preventDefault();
    const fullEmail = `${emailLocalPart}@${emailDomainPart}`;
    console.log(id);
    console.log(password);
    console.log(fullEmail);
  };
  return (
    <section className="SignUpInput">
      <form onSubmit={onCreate}>
        <div className="id_input_wrapper">
          <div className="input">
            <label htmlFor="input_id">아이디</label>
            <input
              type={"text"}
              placeholder={"아이디를 입력해주세요"}
              id={"input_id"}
              onChange={(e) => setId(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <Button text={"중복확인"} bgc={"blue"} />
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
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="email_input_wrapper">
          <div className="email_input">
            <label htmlFor="input_email">이메일</label>
            <input
              type={"text"}
              placeholder={"이메일을 입력해주세요"}
              id={"input_email"}
              onChange={(e) => setemailLocalPart(e.target.value)}
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
              <option value="daum.net">daum.ner</option>
            </select>
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
          <Button text={"가입하기"} bgc={"blue"} />
        </div>
      </form>
    </section>
  );
};

export default SignUpInput;
