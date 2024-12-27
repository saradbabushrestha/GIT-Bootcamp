import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ButtonComponent from "../components/ButtonComponent";
import TextFieldComponent from "../components/TextFieldComponent";

const Login = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Login to your Account
            </h1>
            <p className="mt-2 text-gray-600">
              Welcome back! Select method to log in:
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 w-[215px] h-[60px] py-2 px-4 border-2 border-[rgb(128,152,249,0.5)] rounded-lg flex items-center justify-center gap-2 hover:bg-[rgb(128,152,249,0.2)] transition-colors">
              <FcGoogle size={24} color="red" />
              <span>Google</span>
            </button>
            <button className="flex-1 py-2 px-4 border-2 border-[rgb(128,152,249,0.5)] rounded-lg flex items-center justify-center gap-2 hover:bg-[rgb(128,152,249,0.2)] transition-colors">
              <FaFacebook size={24} color="#1773ea" />
              <span>Facebook</span>
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#f4fafe] text-gray-500">
                or continue with email
              </span>
            </div>
          </div>

          <form className="">
            <TextFieldComponent
              name="Email"
              placeholder="Email"
              inputType="string"
            />
            <TextFieldComponent
              name="Password"
              placeholder="Password"
              inputType="password"
            />

            <ButtonComponent btnBgColor="bg-primary-color" btnText="Login" />
          </form>
        </div>
      </div>
      <div className="flex-1 bg-log-in bg-contain bg-center bg-no-repeat bg-[#6172F3]">
        {/* <img src="/images/login-image.png" alt="Please login to continue" /> */}
      </div>
    </div>
  );
};

export default Login;
