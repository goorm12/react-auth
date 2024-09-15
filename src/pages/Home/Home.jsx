import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import "./Home.css";

const Home = () => {
  const nav = useNavigate();
  const handleClickLogin = () => {
    nav("/login");
  };

  const handleClickSignUp = () => {
    nav("/signup");
  };
  return (
    <div>
      <Header title={"홈 화면"} />
      <div className="button-wrapper">
        <Button
          text={"로그인 하러가기"}
          bgc={"blue"}
          onClick={handleClickLogin}
        />
        <Button
          text={"회원가입 하러가기"}
          bgc={"blue"}
          onClick={handleClickSignUp}
        />
      </div>
    </div>
  );
};

export default Home;
