import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from "react-router-dom";

const ItemDetail = ({ nombre, img, precio, id, descripcion, stock }) => {

  const [quantity, setQuantity] = useState(0)

  function handleOnAdd(cantidad) {
    setQuantity(cantidad)
  }
  console.log(quantity)

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
        {quantity > 0 ? (
          <button>
            <Link
              to="/carrito"
            >
              Ir al carrito
            </Link>
          </button>
        ) : (
          <ItemCount initial={1} stock={15} onAdd={handleOnAdd} />
        )}
      </footer>
    </div>
  );
};

export default ItemDetail;
