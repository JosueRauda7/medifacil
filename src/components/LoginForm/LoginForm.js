import { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import "./LoginForm.css";
import InputText from "../UI/InputText/InputText";
import Button from "../UI/Button/Button";
// import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordReveal, setPaswordReveal] = useState(false);

  const [isSwitchToRegister, setIsSwitchToRegister] = useState(false);

  const switchToRegister = () => {
    setLabelError([]);
    setIsSwitchToRegister(!isSwitchToRegister);
  };

  const eyeClickedHandle = () => {
    setPaswordReveal(!passwordReveal);
  };

  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const [labelError, setLabelError] = useState([]);

  const emailChangingHandle = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const passwordChangingHandle = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };

  const confirmPasswordChangingHandle = (e) => {
    setFormData({
      ...formData,
      confirmPassword: e.target.value,
    });
  };

  const register = (e) => {
    let label = [];

    if (formData.password !== formData.confirmPassword) {
      const newLabel = "Las contraseñas no coinciden";
      // const found = labelError.find((label) => label === newLabel);
      // if (found === undefined) {
      label.push(newLabel);
      // }
    }
    if (!emailRegex.test(formData.email)) {
      const newLabel = "Email no valido";
      // const found = labelError.find((label) => label === newLabel);
      // if (found === undefined) {
      label.push(newLabel);
      // }
    }
    setLabelError([...label]);
  };

  const login = () => {};

  return (
    <form>
      <InputText
        label='Email'
        icon={EmailIcon}
        changed={(e) => emailChangingHandle(e)}
        type='text'
        value={formData.email.value}
      />
      <InputText
        label='Contraseña'
        icon={LockIcon}
        changed={(e) => passwordChangingHandle(e)}
        type='password'
        value={formData.password.value}
        passwordReveal={passwordReveal}
        eyeClickedHandle={eyeClickedHandle}
      />
      {isSwitchToRegister && (
        <InputText
          label='Confirmar contraseña'
          icon={LockIcon}
          changed={(e) => confirmPasswordChangingHandle(e)}
          type='password'
          value={formData.password.value}
          passwordReveal={passwordReveal}
          eyeClickedHandle={eyeClickedHandle}
          isConfirmPassword
        />
      )}
      <div className='ControlButtons'>
        {isSwitchToRegister && labelError
          ? labelError.map((err, index) => (
              <p key={index} className='ErrorLabel'>
                {err}
              </p>
            ))
          : null}
        {!isSwitchToRegister && (
          <p>
            <a href=''>¿Has olvidado tu contraseña?</a>
          </p>
        )}
        <Button onClick={isSwitchToRegister ? register : login}>
          {isSwitchToRegister ? "Registrarse" : "Iniciar Sesión"}
        </Button>
        {isSwitchToRegister ? (
          <p>
            ¿Ya tienes una cuenta?{" "}
            <span className='switchLink' onClick={switchToRegister}>
              Iniciar Sesión
            </span>
          </p>
        ) : (
          <p>
            ¿No tienes cuenta aún?{" "}
            <span className='switchLink' onClick={switchToRegister}>
              Registrarse
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
