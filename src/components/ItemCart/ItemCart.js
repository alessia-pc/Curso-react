import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { muestraEnMiles } from "../../services/muestraEnMiles";
import "./ItemCart.css";

const ItemCart = ({ id, nombre, precio, quantity }) => {
  const { removerItem } = useContext(CartContext);

  return (
    <div className="container-itemCart">
      <div className="itemCart">
        <div className="container-info-producto">
          <strong className="nombre-producto">{nombre}</strong>
        </div>
        <div className="container-info-producto">
          <strong>Precio unitario:</strong> $ {muestraEnMiles(precio)}
        </div>
        <div className="container-info-producto">
          <strong>Subtotal: </strong> $ {muestraEnMiles(quantity * precio)}{" "}
        </div>
        <div className="container-info-producto">
          <strong>Cantidad: </strong>
          {quantity}
        </div>
        <button className="btn-removeItem" onClick={() => removerItem(id)}>
          <img
            width="30"
            height="30"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            alt="imgEliminarItemDelCarrito"
          />
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
