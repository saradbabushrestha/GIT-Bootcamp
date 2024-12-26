export type ButtonComponentProps={
    btnText:string;
    type:"button" | "submit" | "reset";
    className?:string;
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}

export type TextFieldComponentProps={
    name:string;
    placeholder:string;
    label:string;
    inputType:string;
    className?:string;
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
    handleBlur:(event:React.FocusEvent<HTMLInputElement>)=>void;
    value:string;
    errorMessage?:string;
}