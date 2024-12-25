import { TextFieldComponentProps } from "../../types/Sign Up/TextFieldComponentProps";

const TextFieldComponent = ({
  name,
  placeholder,
  label,
  inputType,
}: TextFieldComponentProps) => {
  return (
    <>
      <div>
        <p>{label}</p>
        <div>
          <input
            name={name}
            placeholder={placeholder}
            type={inputType}
            className="w-[30vw] rounded-lg border border-black pl-[10px] pr-2 pt-[10px] pb-[10px]"
          />
        </div>
      </div>
    </>
  );
};

export default TextFieldComponent;
