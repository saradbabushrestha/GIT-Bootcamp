export type ButtonComponentProps = {
  btnType?: any;
  styles: string;
  btnText: string;
  onClick?: (e?: any) => void;
  disabled?: boolean;
};

export type TextFieldComponentProps = {
  name: string;
  value?: string;
  placeholder: string;
  inputType: string;
  icon?: React.ReactNode;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
