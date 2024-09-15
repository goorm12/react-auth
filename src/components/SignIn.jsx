import "./SignIn.css";
import Input from "./input";
import Header from "./Header";
import Button from "./Button";

const SignIn = () => {
  return (
    <div>
      <Header title={"로그인"} />
      <div className="SignIn">
        <div className="sign-in__id">
          <Input
            title={"아이디"}
            type={"text"}
            placeholder={"아이디를 입력해주세요"}
            labelId={"input_id"}
          />
        </div>
        <div className="sign-in__pw">
          <Input
            title={"비밀번호"}
            type={"password"}
            placeholder={"비밀번호를 입력해주세요"}
            labelId={"input_pw"}
          />
        </div>
        <Button text={"로그인"} bgc={"blue"} />
      </div>
    </div>
  );
};

export default SignIn;
