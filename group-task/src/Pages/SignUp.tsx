import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import ButtonComponent from "../components/ButtonComponent";
import TextFieldComponent from "../components/TextFieldComponent";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../types/schema";

const SignUp = () => {
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    onSubmit: (values) => {
      console.log("Form Submitted!", values);
      navigate("/login");
    },
    validationSchema: signupSchema,
  });

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
          <form onSubmit={handleSubmit}>
            <div>
              <TextFieldComponent
                value={values.username}
                name="username"
                placeholder="Username"
                inputType="string"
                handleChange={handleChange}
                icon={
                  <FaUser
                    size={23}
                    color="rgb(45,49,166,0.2)"
                    className="absolute left-3 top-[18px]"
                  />
                }
              />
              <TextFieldComponent
                value={values.email}
                name="email"
                placeholder="Email"
                inputType="email"
                handleChange={handleChange}
                icon={
                  <FaEnvelope
                    size={23}
                    color="rgb(45,49,166,0.2)"
                    className="absolute left-3 top-[18px]"
                  />
                }
              />
              <TextFieldComponent
                value={values.password}
                name="password"
                placeholder="Password"
                inputType="password"
                handleChange={handleChange}
                icon={
                  <FaLock
                    size={23}
                    color="rgb(45,49,166,0.2)"
                    className="absolute left-3 top-[17px]"
                  />
                }
              />
              <TextFieldComponent
                value={values.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
                inputType="password"
                handleChange={handleChange}
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
                className="mt-1 rounded border-gray-300"
                checked={values.acceptTerms}
                onChange={handleChange}
              />
              <label className="ml-2 text-sm text-[#71717A]">
                Accept{" "}
                <a className="text-[#8098F9] font-medium hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>

            <ButtonComponent
              styles="w-full py-3 px-4 bg-[#8098F9] hover:bg-[#536fdc] text-white rounded-lg transition-colors
              font-inter font-bold text-lg mt-[25px]"
              btnText="SIGN UP"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            />
          </form>
          <p className="text-center text-sm text-[#71717A] mt-[-5px] font-montserrat">
            You have account?{" "}
            <a
              className="text-[#8098F9] hover:underline font-semibold cursor-pointer"
              onClick={() => navigate("/login")}
            >
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
