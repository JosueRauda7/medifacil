import React from "react";
import "./Login.css";
import LoginImage from "../../assets/LoginImage";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = (props) => {
  return (
    <div className='Login'>
      <div className='LeftLogin'>
        <LoginImage className='HeroImage' />
      </div>
      <div className='RigthLogin'>
        <h1>Bienvenido!</h1>
        <hr className='hr' />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
