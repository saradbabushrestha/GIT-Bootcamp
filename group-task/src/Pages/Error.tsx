import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-between h-screen w-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-y-6 min-w-[418px]">
          <div className="font-montserrat">
            <h1 className="text-4xl font-bold text-[#09090B]">404</h1>
            <p className="text-lg text-[#71717A]">Page not found</p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/login"
              className="w-full py-3 px-4 bg-[#8098F9] hover:bg-[#536fdc] text-white rounded-lg transition-colors
              font-inter font-bold text-lg"
            >
              Go to Login Page
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-sign-up bg-contain bg-center bg-no-repeat bg-[#6172F3]"></div>
    </div>
  );
};

export default Error;
