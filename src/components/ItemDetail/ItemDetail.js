import { useState, useContext } from "react";
import { Context } from "../../App";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ nombre, img, precio, id, descripcion, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem, isInCart, getQuantityProduct } = useContext(CartContext);

  function handleOnAdd(cantidad) {
    /* setQuantity(cantidad); */

    const objetosProductos = {
      id,
      nombre,
      precio,
      quantity: cantidad,
    };
    addItem({ ...objetosProductos });
  }
  console.log(quantity);

  return (
    <div className="detalle-productos">
      <h3>{nombre}</h3>
      <p>
        {" "}
        <strong>Precio:</strong> {precio}
      </p>
      <img className="img-productos" src={img} alt={nombre} />
      <p>{descripcion}</p>
      <p>
        {" "}
        <strong>Stock:</strong> {stock}{" "}
      </p>

      <footer>
        {false ? (
          <button>
            <Link to="/carrito">Ir al carrito</Link>
          </button>
        ) : (
          <ItemCount
            onAdd={handleOnAdd}
            initial={getQuantityProduct(id)}
            stock={15}
          />
        )}
      </footer>
    </div>
  );
};

export default ItemDetail;
