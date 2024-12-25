import ButtonComponent from "../components/Sign Up/ButtonComponent";
import TextFieldComponent from "../components/Sign Up/TextFieldComponent";

const Login = () => {
  return (
    <>
      <h1>Welcome Back</h1>
      <h3>Enter your Credentials to access your account</h3>
      <form action="">
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
      </form>
    </>
  );
};

export default Login;
