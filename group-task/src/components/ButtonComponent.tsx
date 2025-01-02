import { ButtonComponentProps } from "../types/components/components";

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
