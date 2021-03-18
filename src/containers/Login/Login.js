import React, { useState } from "react";
import "./Login.css";
import LoginImage from "../../assets/LoginImage";
import LoginForm from "../../components/LoginForm/LoginForm";
import LogoMedifacil from "../../assets/LogoMedifacil";

const Login = (props) => {
  return (
    <div className='Login'>
      <div className='LeftLogin'>
        <LogoMedifacil className='LogoMedifacil' />
        <div className='ImageContainer'>
          <LoginImage className='HeroImage' />
        </div>
        <h1 className='HeroTitle'>
          La plataforma que te conecta con un médico para acceder a consultas a
          distancia
        </h1>
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
