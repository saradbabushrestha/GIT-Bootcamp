import { ButtonComponentProps } from "../../types/Sign Up/ButtonComponentProps"

const ButtonComponent = ({btnBgColor,btnText}:ButtonComponentProps) => {
  return (
    <button className={ `w-[404px] font-bold text-white rounded-[10px]  ${btnBgColor} mt-[64.57px] h-[32px]`}>{btnText}</button>
  )
}

export default ButtonComponent 