import { useState } from "react";
import "./app1.css";
import FormInput from "./FormInput";

const App1 = () => {
  const [values, setValues] = useState({
    username:"",
    email:"",
    dateofbirth:"",
    password:"",
  });
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value });
  }
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <FormInput name="username" label="Username" placeholder="please enter your username" type="text" value={values.username} onChange={onChange}
      errorMessage="Username should be 5-10 charactors" required="true" pattern="^[A-Za-z0-9]{5,10}$"/>
      <FormInput name="email" label="Email" placeholder="please enter your email" type="email" value={values.email} onChange={onChange}
      errorMessage="should be a valid email address" required="true"/>
      <FormInput name="dateofbirth" label="DateofBirth" type="date" value={values.dateofbirth} onChange={onChange} required="true"/>
      <FormInput name="password" label="Password" placeholder="please enter your password" type="password" value={values.password} onChange={onChange}
      errorMessage="password should include 8-20 charactors including an alphabet,number and a special character" required="true" pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"/>
      <div className="submitbutton"><button>Submit</button></div>
      </form>
    </div>
  );
};

export default App1;