import Carrito from "./carrito-de-compras (2).png";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="carritoCompras">
      <img src={Carrito} width="30px" alt="carrito de compras" />
      <p className="numero-carrito">0</p>
    </div>
  );
};

export default CartWidget;
