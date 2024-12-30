import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import ButtonComponent from "../components/ButtonComponent";
import TextFieldComponent from "../components/TextFieldComponent";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-between h-screen w-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-y-6 min-w-[418px]">
          <div className="font-montserrat">
            <h1 className="text-4xl font-bold text-[#09090B]">
              Create your account
            </h1>
            <p className="text-lg text-[#71717A]">Unlock all Features!</p>
          </div>
          <form onSubmit={handleSignup}>
            <div>
              <TextFieldComponent
                name="Username"
                placeholder="Username"
                inputType="string"
                icon={
                  <FaUser
                    size={23}
                    color="rgb(45,49,166,0.2)"
                    className="absolute left-3 top-[18px]"
                  />
                }
              />
              <TextFieldComponent
                name="Email"
                placeholder="Email"
                inputType="email"
                icon={
                  <FaEnvelope
                    size={23}
                    color="rgb(45,49,166,0.2)"
                    className="absolute left-3 top-[18px]"
                  />
                }
              />
              <TextFieldComponent
                name="Password"
                placeholder="Password"
                inputType="password"
                icon={
                  <FaLock
                    size={23}
                    color="rgb(45,49,166,0.2)"
                    className="absolute left-3 top-[17px]"
                  />
                }
              />
              <TextFieldComponent
                name="Confirm Password"
                placeholder="Confirm Password"
                inputType="password"
                icon={
                  <FaLock
                    size={23}
                    color="rgb(45,49,166,0.2)"
                    className="absolute left-3 top-[17px]"
                  />
                }
              />
            </div>
            <div className="flex items-start font-montserrat">
              <input
                type="checkbox"
                name="acceptTerms"
                className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-600">
                Accept{" "}
                <a
                  href="#"
                  className="text-[#8098F9] font-medium hover:underline"
                >
                  terms and conditions
                </a>
              </label>
            </div>

            <ButtonComponent
              styles="w-full py-3 px-4 bg-[#8098F9]  hover:bg-[#536fdc] text-white rounded-lg transition-colors
              font-inter font-bold text-lg
              mt-[25px]"
              btnText="SIGN UP"
            />
          </form>
          <p className="text-center text-sm text-gray-600 mt-[-5px]">
            You have account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login now
            </a>
          </p>
        </div>
      </div>
      <div className="flex-1 bg-sign-up bg-contain bg-center bg-no-repeat bg-[#6172F3]"></div>
    </div>
  );
};

export default SignUp;
