import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <h4>
        Seguinos en nuestras redes sociales o envianos un mensajito mediante
        Whatsapp!
      </h4>
      <picture className="container-iconos">
        <Link to="/">
          <img
            width="50px"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="icono-instagram"
          ></img>
        </Link>

        <Link to="/">
          <img
            width="50px"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384055.png"
            alt="icono-whatsapp"
          ></img>
        </Link>

        <Link to="/">
          <img
            width="50px"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
            alt="icono-facebook"
          ></img>
        </Link>
      </picture>
      <p> © 2022 Alessia Puga Cammuso.</p>
    </footer>
  );
};

export default Footer;
