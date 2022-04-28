import "./NavBar.css";
import icono from "./icons8-onda-sonora-26.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategories } from "../../asyncmock";
import { firestoreDb } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";

const botonesNavBar = [
  { id: "inicio", nombreBoton: "Inicio" },
  { id: "productos", nombreBoton: "Productos" },
  { id: "contacto", nombreBoton: "Contacto" },
];

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    /* getCategories().then((categories) => {
      setCategories(categories);
    }); */

    getDocs(collection(firestoreDb, "categorias")).then((response) => {
      const categorias = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setCategories(categorias);
    });
  }, []);

  return (
    <nav className="NavBar">
      <ul className="componentes-NavBar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          <img src={icono} height="37px" className="NavBar-icono" alt="logo" />
        </NavLink>
        <li id="elements-NavBar">
          <NavLink
            to="/inicio"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Inicio
          </NavLink>
        </li>
        <li id="elements-NavBar">
          <NavLink
            to="/productos"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Productos
          </NavLink>
          <ul className="menu-vertical">
            {categories.map((cat) => (
              <NavLink
                key={cat.id}
                to={`/productos/${cat.id}`}
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                {cat.description}
              </NavLink>
            ))}
          </ul>
        </li>

        <li id="elements-NavBar">
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

const bontonNavbar = () => {
  return <div>asyncmock</div>;
};

export default NavBar;
