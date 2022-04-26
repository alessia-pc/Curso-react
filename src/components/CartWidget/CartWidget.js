import Carrito from "./icons8-carrito-de-compras-24.png";
import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className="carritoCompras">
      <img src={Carrito} width="30px" alt="carrito de compras" />
      <p className="numero-carrito">{getQuantity()} </p>
    </div>
  );
};

export default CartWidget;
