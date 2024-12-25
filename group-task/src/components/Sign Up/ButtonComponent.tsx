import { ButtonComponentProps } from "../../types/Sign Up/ButtonComponentProps";

const ButtonComponent = ({ btnBgColor, btnText }: ButtonComponentProps) => {
  return (
    <button
      className={`w-[30vw] font-bold text-white rounded-lg pt-2 pb-2 ${btnBgColor} mt-6`}
    >
      {btnText}
    </button>
  );
};

export default ButtonComponent;
