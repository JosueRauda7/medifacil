import "./Button.css";

const Button = (props) => {
  return (
    <div className='Button' {...props}>
      {props.children}
    </div>
  );
};

export default Button;
