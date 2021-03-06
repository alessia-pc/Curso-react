import "./Notificacion.css";
import { useState, createContext, useContext } from "react";

const Notificacion = ({
  mensaje,
  severidad = "exito",
  otraClase = "Mensaje",
}) => {
  const notificacionStyles = {
    position: "absolute",
    top: 100,
    right: severidad === "exito" ? 5 : 0,
    padding: "10px 20px 10px 20px",
    fontSize: "17px",
  };

  if (mensaje === "") {
    return null;
  }

  const configuracion = true
    ? {
        style: notificacionStyles,
        className: `${severidad === "exito" ? "Exito" : "Error"} ${
          otraClase || ""
        }`,
      }
    : {};

  return <div {...configuracion}>{mensaje}</div>;
};

const NotificacionContext = createContext();

export const NotificacionProvider = ({ children }) => {
  const [mensaje, setMensaje] = useState("");
  const [severidad, setSeveridad] = useState("Exito");

  const setNotificacion = (sev, msj) => {
    setMensaje(msj);
    setSeveridad(sev);
    setTimeout(() => {
      setMensaje("");
    }, 2700);
  };

  return (
    <NotificacionContext.Provider value={{ setNotificacion }}>
      <Notificacion mensaje={mensaje} severidad={severidad} />
      {children}
    </NotificacionContext.Provider>
  );
};

export const useNotificacion = () => {
  return useContext(NotificacionContext);
};
