import { ButtonComponentProps } from "../types/utils/utils";

const ButtonComponent = ({
  btnType,
  styles,
  btnText,
  onClick,
  disabled,
}: ButtonComponentProps) => {
  return (
    <button type={btnType} onClick={onClick} className={`${styles}`}>
      {btnText}
    </button>
  );
};

export default ButtonComponent;
