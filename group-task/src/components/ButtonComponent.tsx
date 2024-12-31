import { ButtonComponentProps } from "../types/utils/utils";

const ButtonComponent = ({
  styles,
  btnText,
  onClick,
}: ButtonComponentProps) => {
  return (
    <button onClick={onClick} className={`${styles}`}>
      {btnText}
    </button>
  );
};

export default ButtonComponent;
