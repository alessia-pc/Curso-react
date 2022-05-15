import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { useNotificacion } from "../../notificacion/Notificacion";
import { muestraEnMiles } from "../../services/muestraEnMiles";

const ItemDetail = ({ nombre, img, precio, id, descripcion, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { anadirItem, getQuantityProducto, getQuantity } =
    useContext(CartContext);

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
    <div>
      <div className="detalle-productos">
        <div className="divImgProductos">
          <img className="img-productos" src={img} alt={nombre} />
        </div>

        <div className="info-producto">
          <h3>{nombre}</h3>
          <p>
            {" "}
            <strong>Precio:</strong> $ {muestraEnMiles(precio)}
          </p>

          <p>
            {" "}
            <strong>Stock:</strong> {stock}{" "}
          </p>

          <div>
            {stock > 0 ? (
              <ItemCount
                onAdd={handleOnAdd}
                initial={getQuantityProducto(id)}
                stock={stock}
              />
            ) : (
              <span>
                <strong>Sin stock</strong>
              </span>
            )}
          </div>

          <div
            className={getQuantity() === 0 ? "irCarritoInvisible" : "irCarrito"}
          >
            <Link className="linkIrAlCarrito" to="/carrito">
              <span>Ir al carrito</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="descripcionProducto">
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
