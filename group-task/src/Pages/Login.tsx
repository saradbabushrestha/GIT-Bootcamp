import ButtonComponent from "../components/ButtonComponent";
import TextFieldComponent from "../components/TextFieldComponent";

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-40 h-screen">
      <div className="">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Welcome Back!
        </h1>
        <p className="text-gray-900 font-semibold">
          Enter your Credentials to access your account
        </p>
        <form className="mt-12">
          <TextFieldComponent
            name="Email Address"
            placeholder="Enter your email"
            inputType="string"
            label="Email"
          />
          <TextFieldComponent
            name="Password"
            placeholder="Enter your password"
            inputType="password"
            label="Password"
          />

          <ButtonComponent btnBgColor="bg-primary-color" btnText="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
