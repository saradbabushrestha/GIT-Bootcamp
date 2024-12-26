import ButtonComponent from "../../components/Sign Up/ButtonComponent";
import TextFieldComponent from "../components/TextFieldComponent";

const SignUp = () => {
  return (
    <>
      <div className="flex gap-[176px]">
        {/* content of the page  */}
        <div className="mt-12 ml-[174px] ">
          <p className="mb-[20px] text-[32px] font-medium">Get Started Now</p>
          <div className="flex flex-col gap-[19.7px]">
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
            <ButtonComponent btnBgColor="bg-primary-color" btnText="Sign Up" />
          </div>
        </div>

        {/* image content */}
        <div className="w-[781.5px] h-[100vh] rounded-l-[45px] bg-gray-300 bg-sign-up object-cover"></div>
      </div>
    </>
  );
};

export default SignUp;
