import ButtonComponent from "../components/ButtonComponent";
import TextFieldComponent from "../components/TextFieldComponent";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex gap-[176px]">
        <div className="mt-12 ml-[174px] ">
          <p className="mb-[20px] text-[32px] font-medium">Get Started Now</p>
          <form onSubmit={handleSignup}>
            <div className="flex flex-col gap-2">
              <TextFieldComponent
                name={"name"}
                placeholder="Enter your username"
                inputType="string"
                label="Name"
              />
              <TextFieldComponent
                name={"email"}
                placeholder="Enter your email"
                inputType="string"
                label="Email"
              />
              <TextFieldComponent
                name={"password"}
                placeholder="Enter your password"
                inputType="password"
                label="Password"
              />
              <TextFieldComponent
                name={"confirmPassword"}
                placeholder="Confirm password"
                inputType="password"
                label="Confirm Password"
              />
              <ButtonComponent
                btnBgColor="bg-primary-color"
                btnText="Sign Up"
              />
            </div>
          </form>
        </div>

        <div className="w-[781.5px] h-[100vh] rounded-l-[45px] bg-gray-300 bg-sign-up object-cover"></div>
      </div>
    </>
  );
};

export default SignUp;
