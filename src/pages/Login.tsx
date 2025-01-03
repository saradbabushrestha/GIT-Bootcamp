import { FaLock, FaEnvelope, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import TextFieldComponent from "../components/TextFieldComponent";
import { useFormik } from "formik";
import { loginSchema } from "../types/schema";
import { fetchUsers } from "../redux/services/userServices";
import { loginUser } from "../redux/actions/loginActions";
import { AppDispatch } from "../redux/store"

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const { email, password } = values;

      const data = await fetchUsers();
      const user = data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        console.log(user);

        try {
          const loggedInUser = dispatch(loginUser(email, password));
          if (loggedInUser && (await loggedInUser).id) {
            navigate(`/${(await loggedInUser).id}/feed`);
          }
        } catch (err) {
          console.error("Login failed:", err);
        }
      } else {
        alert("Invalid email or password");
      }
    },
  });

  return (
    <div className="flex justify-between h-screen w-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-y-6 w-full max-w-sm">
          <div className="font-montserrat text-center">
            <h1 className="text-4xl font-bold text-[#09090B]">
              Login to your Account
            </h1>
            <p className="text-lg text-[#71717A]">
              Welcome back! Select method to log in:
            </p>
          </div>

          <div className="flex gap-4 font-montserrat font-medium text-[22px]">
            <button className="flex-1 py-2 px-4 border-2 border-[rgb(128,152,249,0.5)] rounded-lg flex items-center justify-center gap-2 hover:bg-[rgb(128,152,249,0.2)] transition-colors">
              <FcGoogle size={26} />
              <span>Google</span>
            </button>
            <button className="flex-1 py-2 px-4 border-2 border-[rgb(128,152,249,0.5)] rounded-lg flex items-center justify-center gap-2 hover:bg-[rgb(128,152,249,0.2)] transition-colors">
              <FaFacebook size={26} color="#1773ea" />
              <span>Facebook</span>
            </button>
          </div>

          <div className="relative font-montserrat text-[15px] font-medium">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-[#f4fafe] text-gray-500">
                or continue with email
              </span>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="relative">
              <TextFieldComponent
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
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
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-400 text-[9px] absolute bottom-[2px]">
                  {formik.errors.email}
                </span>
              )}
            </div>

            <div className="relative">
              <TextFieldComponent
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
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
              {formik.touched.password && formik.errors.password && (
                <span className="text-red-400 text-[9px] absolute bottom-[2px]">
                  {formik.errors.password}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between mb-[25px] font-montserrat text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#8098F9] focus:ring-[#8098F9] appearance-none border-2 border-[#8098F9] rounded checked:bg-[#8098F9]"
                />
                <label className="ml-2 text-[#AAAAAA]">Remember me</label>
              </div>
              <div>
                <a
                  href=""
                  className="font-semibold text-[#8098F9] hover:text-blue-500"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <ButtonComponent
              styles="w-full mb-[20px] py-3 px-4 bg-[#8098F9] hover:bg-blue-600 text-white rounded-lg transition-colors font-inter font-bold text-lg"
              btnText={"LOG IN"}
            />

            <p className="text-center text-[#71717A] font-montserrat text-sm">
              Don't have an account?{" "}
              <a
                onClick={() => navigate("/signup")}
                className="text-[#8098F9] hover:text-blue-500 hover:underline font-bold cursor-pointer "
              >
                Create an account
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="flex-1 bg-log-in bg-contain bg-center bg-no-repeat bg-[#6172F3]"></div>
    </div>
  );
};

export default Login;
