import { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: {
      label: "Email",
      pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
      icon: EmailIcon,
      isValid: true,
      value: "",
    },
  });

  const emailChangingHandle = (e) => {
    formData.email.value = e.target.value;
  };

  return (
    <form>
      <div className='form-group'>
        <label>Email</label>
        <div className='Input'>
          <EmailIcon className='IcoInput' />
          <input
            type='text'
            onChange={emailChangingHandle}
            autoComplete={false}
          />
        </div>
      </div>
      <div className='form-group'>
        <label>Password</label>
        <div className='Input'>
          <LockIcon className='IcoInput' />
          <input
            type='password'
            onChange={emailChangingHandle}
            autoComplete={false}
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
