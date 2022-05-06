import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { useNotificacion } from "../../notificacion/Notificacion";
import { muestraEnMiles } from "../../services/muestraEnMiles";

const ItemDetail = ({ nombre, img, precio, id, descripcion, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { anadirItem, getQuantityProduct } = useContext(CartContext);

  const { setNotificacion } = useNotificacion();

  function handleOnAdd(cantidad) {
    setQuantity(cantidad);

    const objetosProductos = {
      id,
      nombre,
      precio,
      quantity: cantidad,
    };
    anadirItem({ ...objetosProductos });
    setNotificacion(
      "exito",
      `Se agregaron ${cantidad} ${nombre} correctamente`
    );
  }

  return (
    <div className="detalle-productos">
      <h3>{nombre}</h3>
      <p>
        {" "}
        <strong>Precio:</strong> $ {muestraEnMiles(precio)}
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
            <Link to="/carrito" className="btn-ir-al-carrito">
              Ir al carrito
            </Link>
          </button>
        ) : (
          <ItemCount
            onAdd={handleOnAdd}
            //initial={getQuantityProduct(id)}
            initial={1}
            stock={15}
          />
        )}
      </footer>
    </div>
  );
};

export default ItemDetail;
