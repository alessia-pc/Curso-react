import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { firestoreDb } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
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
        <li className="elements-NavBar logo">
          <NavLink
            to="/sonorous"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            <strong>SonorouS</strong>
          </NavLink>
        </li>
        <li className="elements-NavBar">
          <NavLink
            to="/inicio"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Inicio
          </NavLink>
        </li>
        <li className="elements-NavBar">
          <NavLink
            to="/productos"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Productos
          </NavLink>
          <ul className="menu-vertical">
            {categories.map((categoria) => (
              <NavLink
                key={categoria.id}
                to={`/productos/${categoria.id}`}
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                {categoria.description}
              </NavLink>
            ))}
          </ul>
        </li>

        <li className="elements-NavBar">
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

export default NavBar;
