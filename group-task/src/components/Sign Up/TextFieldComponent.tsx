import { TextFieldComponentProps } from "../../types/Sign Up/TextFieldComponentProps"


const TextFieldComponent = ({name,placeholder,label,inputType}:TextFieldComponentProps) => {
  return (
    <>
      <div>
        <p>{label}</p>
        <div>
          <input name={name} placeholder={placeholder} type={inputType} className="w-[30vw] rounded-lg border border-black pl-2 pr-2 pt-1 pb-2" />
        </div>
      </div>
    </>
  )
}

export default TextFieldComponent;