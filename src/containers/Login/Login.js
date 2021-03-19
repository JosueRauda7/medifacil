import React from "react";
import "./Login.css";
import LoginImage from "../../assets/LoginImage";
import LoginForm from "../../components/LoginForm/LoginForm";
import LogoMedifacil from "../../assets/LogoMedifacil";

const Login = (props) => {
  return (
    <div className='Login'>
      <div className='LeftLogin'>
        <div className='NoResponsive'>
          <LogoMedifacil color='white' width={100} />
        </div>
        <div className='ImageContainer'>
          <LoginImage className='HeroImage' />
        </div>
        <h1 className='HeroTitle'>
          La plataforma que te conecta con un médico para acceder a consultas a
          distancia
        </h1>
      </div>
      <div className='RigthLogin'>
        <div className='Responsive'>
          <LogoMedifacil notShowText color='#323232' width={20} />
        </div>
        <div className='form'>
          <h1>Bienvenido!</h1>
          <hr className='hr' />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
