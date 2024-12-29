import { TextFieldComponentProps } from "../types/utils/utils";

const TextFieldComponent = ({
  name,
  placeholder,
  inputType,
  icon,
}: TextFieldComponentProps) => {
  return (
    <>
      <div>
        <div className="flex items-center relative">
          {icon}
          <input
            name={name}
            placeholder={placeholder}
            type={inputType}
            className={`w-full h-[60px] mb-[10px] pl-10 pt-[10px] pb-[10px] border-2 rounded-[10px] 
              font-inter text-lg
              placeholder-[rgb(45,49,166,0.2)] text-[rgb(45,49,166,0.2)]  bg-[rgb(128,152,249,0.10)] border-[rgb(128,152,249,0.5)] outline-[#8098F9]`}
          />
        </div>
      </div>
    </>
  );
};

export default TextFieldComponent;
