import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({
  id,
  nombre,
  precio,
  quantity,
}) => {
  const { removerItem } = useContext(CartContext);

  return (
    <div className="container-itemCart">
      <div className="itemCart">
        <p className="container-nombre-producto">
          <strong className="nombre-producto">{nombre}</strong>
        </p>
        <p>
          <strong>Precio unitario:</strong> $ {precio}
        </p>
        <p>
          <strong>Subtotal:</strong> $ {quantity * precio}{" "}
        </p>
        <p>
          <strong>Cantidad:</strong>
          {quantity}
        </p>
        <button className="btn-removeItem" onClick={() => removerItem(id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
