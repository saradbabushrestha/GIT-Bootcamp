import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import TextFieldComponent from "../components/TextFieldComponent.tsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../types/schema/index.ts";
import { createUser, fetchUsers } from "../redux/services/userServices.ts";

const SignUp = () => {
  const navigate = useNavigate();

  const { values, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: signupSchema,
  });

  async function handleSubmit() {
    // Fetch data to validate if user already exists
    const data = await fetchUsers();
    let userExists = false;

    data.forEach((user) => {
      if (user.email === values.email || user.name === values.username) {
        userExists = true;
      }
    });

    if (userExists) {
      resetForm();
      alert("User already exists");
      return;
    } else {
      const postData = {
        name: values.username,
        email: values.email,
        password: values.password,
        role: "user",
        feed: [],
      };

      await createUser(postData);
      resetForm();
      navigate("/login");
    }
  }

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
              <div className="relative">
                <TextFieldComponent
                  value={values.username}
                  name="username"
                  placeholder="Username"
                  inputType="string"
                  onChange={handleChange}
                  icon={
                    <FaUser
                      size={23}
                      color="rgb(45,49,166,0.2)"
                      className="absolute left-3 top-[18px]"
                    />
                  }
                />
                {errors.username && (
                  <span className="text-red-400 text-[9px] absolute bottom-[2px]">
                    {errors.username?.toUpperCase()}
                  </span>
                )}
              </div>

              <div className="relative">
                <TextFieldComponent
                  value={values.email}
                  name="email"
                  placeholder="Email"
                  inputType="email"
                  onChange={handleChange}
                  icon={
                    <FaEnvelope
                      size={23}
                      color="rgb(45,49,166,0.2)"
                      className="absolute left-3 top-[18px]"
                    />
                  }
                />
                {errors.email && (
                  <span className="text-red-400 text-[9px] absolute bottom-[2px]">
                    {errors.email?.toUpperCase()}
                  </span>
                )}
              </div>
              <div className="relative">
                <TextFieldComponent
                  value={values.password}
                  name="password"
                  placeholder="Password"
                  inputType="password"
                  onChange={handleChange}
                  icon={
                    <FaLock
                      size={23}
                      color="rgb(45,49,166,0.2)"
                      className="absolute left-3 top-[17px]"
                    />
                  }
                />
                {errors.password && (
                  <span className="text-red-400 text-[9px] absolute bottom-[2px]">
                    {errors.password?.toUpperCase()}
                  </span>
                )}
              </div>
              <div className="relative">
                <TextFieldComponent
                  value={values.confirmPassword}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  inputType="password"
                  onChange={handleChange}
                  icon={
                    <FaLock
                      size={23}
                      color="rgb(45,49,166,0.2)"
                      className="absolute left-3 top-[17px]"
                    />
                  }
                />
                {errors.confirmPassword && (
                  <span className="text-red-400 text-[9px] absolute bottom-[2px]">
                    {errors.confirmPassword?.toUpperCase()}
                  </span>
                )}
              </div>
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

            {/* This code didn't work */}
            {/* <ButtonComponent
              styles="w-full py-3 px-4 bg-[#8098F9] hover:bg-[#536fdc] text-white rounded-lg transition-colors
              font-inter font-bold text-lg mt-[25px]"
              btnText="SIGN UP"
              btnType="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            /> */}

            {/* So I used this */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#8098F9] hover:bg-[#536fdc] text-white rounded-lg transition-colors
              font-inter font-bold text-lg mt-[25px]"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              SIGN UP
            </button>
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
