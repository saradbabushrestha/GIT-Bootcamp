import ButtonComponent from "../../components/Sign Up/ButtonComponent";
import TextFieldComponent from "../../components/Sign Up/TextFieldComponent";

const SignUp = () => {
  return (
    <>
    
    {/* content of the page  */}
      <div className="mt-3 ml-[174px] ">
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
            name={"retypePassword"}
            placeholder="Retype your password"
            inputType="password"
            label="retypePassword"
          />
          <ButtonComponent btnBgColor="bg-primary-color" btnText="Sign Up" />
        </div>
      </div>

      {/* image content */}
      <div className="w-[781.5px]">

      </div>
    </>
  );
};

export default SignUp;
