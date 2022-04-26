/* import { useState } from "react";

const NavBarItem = () => {

    const [isMenu] = useState()

  return (
    <li id="elements-NavBar">
      <NavLink
        to="/inicio"
        className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
      >
        Inicio
      </NavLink>
      { isMenu ?
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
        </ul> : <></>
      }
    </li>
  );
}

export default NavBarItem */