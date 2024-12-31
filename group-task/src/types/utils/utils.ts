export type ButtonComponentProps = {
  styles: string;
  btnText: string;
  onClick?: (e?: any) => void;
};

export type TextFieldComponentProps = {
  value?: string;
  placeholder: string;
  name: string;
  inputType: string;
  icon?: React.ReactNode;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
