import React from "react";
import MainLayout from "../layout/MainLayout";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <h1 className="signuphead">Signin to your PopX account</h1>
      <p className="logincontent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form>
        <Input label={"Email Address"} placeholder={"Enter email address"} />
        <Input label={"Password"} placeholder={"Enter password"} />

        <Button
          text={"Login"}
          variant="loginbtn"
          onClick={() => navigate("/profile")}
        ></Button>
      </form>
    </MainLayout>
  );
};

export default LoginScreen;
