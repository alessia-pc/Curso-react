import Carrito from "./icons8-carrito-de-compras-24.png";
import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className="carrito-compras">
      <Link to="/carrito">
        <img src={Carrito} width="30px" alt="carrito de compras" />
        <p className={`${getQuantity() === 0 ? "oculto" : "numero-carrito"}`}>
          {getQuantity()}{" "}
        </p>
      </Link>
    </div>
  );
};

export default CartWidget;
