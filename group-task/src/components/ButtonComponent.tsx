import { ButtonComponentProps } from "../types/utils/utils";

const ButtonComponent = ({ styles, btnText }: ButtonComponentProps) => {
  return <button className={`${styles}`}>{btnText}</button>;
};

export default ButtonComponent;
