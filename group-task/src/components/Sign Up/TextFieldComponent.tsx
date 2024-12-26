import { TextFieldComponentProps } from "../../types/Sign Up/TextFieldComponentProps"


const TextFieldComponent = ({name,placeholder,label,inputType}:TextFieldComponentProps) => {
  return (
    <>
      <div>
        <p className="pt-[21px] pb-[5px] font-medium">{label}</p>
        <div>
          <input name={name} placeholder={placeholder} type={inputType} className="w-[404px] rounded-[10px] border border-black pl-[10px] pt-[10px] pb-[10px] h-[32px]" />
        </div>
      </div>
    </>
  )
}

export default TextFieldComponent;