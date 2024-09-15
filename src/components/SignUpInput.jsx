import "./SignUpInput.css";
import Button from "./Button";
import Input from "./input";

const SignUpInput = () => {
  return (
    <section className="SignUpInput">
      <div className="id_input_wrapper">
        <div className="input">
          <Input
            title={"아이디"}
            type={"text"}
            placeholder={"아이디를 입력해주세요"}
            labelId={"input_id"}
          />
        </div>
        <div>
          <Button text={"중복확인"} bgc={"blue"} />
        </div>
      </div>

      <div className="pw_input_wrapper">
        <div className="pw_first-child">
          <Input
            title={"비밀번호"}
            type={"password"}
            placeholder={"비밀번호를 입력해주세요"}
            labelId={"input_pw"}
          />
        </div>

        <div className="pw_second-child">
          <Input
            type={"password"}
            placeholder={"비밀번호를 입력해주세요"}
            labelId={"input_pw"}
          />
        </div>
      </div>
      <div className="email_input_wrapper">
        <div className="email_input">
          <Input
            title={"이메일"}
            type={"email"}
            placeholder={"이메일을 입력해주세요"}
          />
        </div>
        <span>@</span>
        <div className="select">
          <select>
            <option value=""></option>
            <option value="naver">naver.com</option>
            <option value="google">google.com</option>
            <option value="daum">daum.ner</option>
          </select>
        </div>
      </div>
      <div className="tel_input_wrapper">
        <div className="tel_input">
          <Input
            title={"전화번호"}
            type={"tel"}
            placeholder={"전화번호를 입력해주세요"}
            labelId={"input_tel"}
          />
        </div>
        <div className="tel_btn">
          <Button text={"인증번호 받기"} bgc={"blue"} />
        </div>
      </div>

      <div className="submit_button">
        <Button text={"가입하기"} bgc={"blue"} />
      </div>
    </section>
  );
};

export default SignUpInput;
