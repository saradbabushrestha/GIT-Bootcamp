import { TextFieldComponentProps } from "../types/utils/utils";

const TextFieldComponent = ({
  name,
  placeholder,
  inputType,
}: TextFieldComponentProps) => {
  return (
    <>
      <div>
        <div>
          <input
            name={name}
            placeholder={placeholder}
            type={inputType}
            className="w-[453px] h-[64px] mb-[10px] placeholder-[rgb(45,49,166,0.2)] text-[rgb(45,49,166,0.2)] border-2 bg-[rgb(128,152,249,0.10)] rounded-[10px]  border-[rgb(128,152,249,0.5)] pl-[10px] pt-[10px] pb-[10px]"
          />
        </div>
      </div>
    </>
  );
};

export default TextFieldComponent;
