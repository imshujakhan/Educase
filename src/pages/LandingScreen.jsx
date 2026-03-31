import MainLayout from "../layout/MainLayout";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const LandingScreen = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <h1 className="heading">Welcome to Popx</h1>
      <p className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Button
        text={"Create Account"}
        onClick={() => navigate("/signup")}
      ></Button>
      <Button
        text={"Already Register? Login"}
        onClick={() => navigate("/login")}
        variant="alreadyRegBtn"
      ></Button>
    </MainLayout>
  );
};

export default LandingScreen;
