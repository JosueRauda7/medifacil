import "./InputText.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const InputText = (props) => {
  return (
    <div className='form-group'>
      <label>{props.label}</label>
      <div className='Input'>
        <props.icon className='IcoInput' />
        <input
          type={
            props.type !== "password"
              ? props.type
              : props.passwordReveal
              ? "text"
              : "password"
          }
          onChange={(e) => props.changed(e)}
          value={props.value}
          autoComplete={"false"}
        />
        {props.type === "password" &&
          (props.passwordReveal ? (
            <VisibilityOffIcon
              onClick={props.eyeClickedHandle}
              className='IcoInput PasswordEye'
            />
          ) : (
            <VisibilityIcon
              onClick={props.eyeClickedHandle}
              className='IcoInput PasswordEye'
            />
          ))}
      </div>
    </div>
  );
};

export default InputText;
