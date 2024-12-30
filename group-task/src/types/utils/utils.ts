export type ButtonComponentProps = {
  styles: string;
  btnText: string;
};

export type TextFieldComponentProps = {
  name: string;
  placeholder: string;
  inputType: string;
  icon: JSX.Element;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
