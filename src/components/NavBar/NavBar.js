import "./NavBar.css";
import icono from "./icons8-onda-sonora-30.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul className="componentes-NavBar">
        <img
          src={icono}
          width="30px"
          height="30px"
          className="NavBar-icono"
          alt="logo"
        />

        <li id="elements-NavBar">
          <a href="#inicio">Inicio</a>
        </li>
        <li id="elements-NavBar">
          <a href="#productos">Productos</a>
          <ul className="menu-vertical">
            <li>Auriculares</li>
            <li>Parlantes</li>
            <li>Parlantes de exterior</li>
          </ul>
        </li>
        <li id="elements-NavBar">
          <a href="#marcas">Marcas</a>
          <ul className="menu-vertical">
            <li>JBL</li>
            <li>Beats</li>
            <li>Sony</li>
          </ul>
        </li>
        <li id="elements-NavBar">
          <a href="#contacto">Contacto</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
