import ButtonComponent from "../../components/Sign Up/ButtonComponent"
import TextFieldComponent from "../../components/Sign Up/TextFieldComponent"


const SignUp = () => {
  return (
    <>  
    <div className="flex flex-col gap-4">
        <TextFieldComponent name={"name"} placeholder="Enter your username" inputType="string" label="Name"  />
        <TextFieldComponent name={"email"} placeholder="Enter your email" inputType="string" label="Email"  />
        <TextFieldComponent name={"password"} placeholder="Enter your password" inputType="password" label="Password"  />
        <ButtonComponent  btnBgColor="bg-primary-color" btnText="Sign Up"/>
    </div>
    </>
  )
}

export default SignUp