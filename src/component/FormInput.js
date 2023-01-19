import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused,setFocused]=useState(false);
  const{onChange,name,label,errorMessage,...others}=props;
  const handleFocused=()=>{
    setFocused(true);
  }
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...others} name={name} onChange={onChange} onBlur={handleFocused} focused={focused.toString()} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;