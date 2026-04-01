import Button from "../components/Button";
import MainLayout from "../layout/MainLayout";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const SignUpScreen = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <h1 className="signup-heading">Create your PopX account</h1>
      <form action="">
        <Input label={"Full Name*"} placeholder={""} value="Marry Doe" />
        <Input label={"Phone number*"} placeholder={""} value="Marry Doe" />
        <Input label={"Email address*"} placeholder={""} value="Marry Doe" />
        <Input label={"Password*"} placeholder={""} value="Marry Doe" />
        <Input label={"Company name"} placeholder={""} value="Marry Doe" />
        <div className="agency">
          <p>Are you an agency? *</p>

          <div className="radio-group">
            <label className="radio-item">
              <input type="radio" name="agency" />
              <span className="custom-radio"></span>
              Yes
            </label>

            <label className="radio-item">
              <input type="radio" name="agency" />
              <span className="custom-radio"></span>
              No
            </label>
          </div>
        </div>
      </form>
      <Button
        text={"Create Account"}
        variant="signup-btn"
        onClick={() => navigate("/profile")}
      />
    </MainLayout>
  );
};

export default SignUpScreen;
