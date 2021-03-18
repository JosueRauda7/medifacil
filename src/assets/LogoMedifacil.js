import Logo from "./medifacil.png";
import "./LogoMedifacil.css";

const LogoMedifacil = (props) => {
  return (
    <div className='Logo'>
      <img className='LogoMedifacil' alt='Logo de Medifacil' src={Logo} />
      <h1>Medifácil</h1>
    </div>
  );
};

export default LogoMedifacil;
