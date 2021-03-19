import Logo from "./medifacil.png";
import "./LogoMedifacil.css";

const LogoMedifacil = (props) => {
  return (
    <div className='Logo'>
      <img
        className='LogoMedifacil'
        style={{ width: `${props.width}%` }}
        alt='Logo de Medifacil'
        src={Logo}
      />
      {!props.notShowText && <h1 style={{ color: props.color }}>Medifácil</h1>}
    </div>
  );
};

export default LogoMedifacil;
