import { ButtonComponentProps } from "../types/utils/utils"

const ButtonComponent = ({btnText,type,className,handleClick}:ButtonComponentProps) => {
  return (
    <button className={ `w-[404px] font-bold text-white rounded-[10px]  bg-primary-color mt-[46.57px] h-[32px] ${className}`} type={type} onClick={handleClick}>{btnText}</button>
  )
}

export default ButtonComponent 