import Button from "./Button";
import Input from "./input";

const SignUpInput = () => {
  return (
    <section className="SignUpInput">
      <div>
        <Input
          title={"아이디"}
          type={"text"}
          placeholder={"아이디를 입력해주세요"}
        />

        <Button text={"중복확인"} bgc={"blue"} />
      </div>
      <div>
        <Input
          title={"비밀번호"}
          type={"password"}
          placeholder={"비밀번호를 입력해주세요"}
        />
        <Input type={"password"} placeholder={"비밀번호를 입력해주세요"} />
      </div>
      <div>
        <Input
          title={"이메일"}
          type={"email"}
          placeholder={"이메일을 입력해주세요"}
        />
      </div>
      <div>
        <Input
          title={"전화번호"}
          type={"tel"}
          placeholder={"전화번호를 입력해주세요"}
        />
        <Button text={"인증번호 받기"} />
      </div>
      <div>
        <Button text={"가입하기"} />
      </div>
    </section>
  );
};

export default SignUpInput;
